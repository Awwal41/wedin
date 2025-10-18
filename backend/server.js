const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.use(express.json());

// Google Service Account Configuration
const SERVICE_ACCOUNT_CONFIG = {
  type: 'service_account',
  project_id: 'driveapiforstreaming',
  private_key_id: 'd85d1ec43cf5286e7f13c58b13f823209aaac01f',
  private_key: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDTOMiOn7B+3luu
7AE0998hJhuJna5z/OriS5MsYhagpfkBnwF7ZZkSF5ZcrOZrO6Ei1CDWuy9gzayQ
N+UZj563K8eP40srEwG4AeB0KXn0P3VwvnuZWg3TrYS6rkmVDmr19DQ5rCp68f8T
TuLOkaElwf2XDE2dgCY/uf2TY2hP0ouokCzB2DeNR89lZT1CVZIPmXsJbzCwCNsj
6pD1P8t/IKosDk8WvViT9eS+M1N3mbiAiquQUE8M/E0qeXJxpAUQAxC7VUGm5u8M
g006emBYvAWB1OX/bEltNE7+VST5DScj8dPETW4KkgmQOUsYdSy0f7RA+yH2luZQ
d5b08gVLAgMBAAECggEAHJB7IuU6n6BKLX4yGEEwgNGf+2eCbkzKUP8fxeqf8mrE
9sX+PntPYjskCkrBlcfdyJF/vWUECRHXdTYcj+00bW4IvLnkHPei4wkHRdOkGqFd
rE5o9aSlkQulaFTl6OKnGWBEkyC9f/Hrvmc2f0as0H01t7B3a0Yne1/CM0/yt98w
42XipsMxHHLBqlusFWyYGy62zyp5K11vdncxVPAZ4mEmFcCs7W7sUCD5ZCyy29yN
IfwadyP2kcQwp8D9WXco8XYjrSadx/rdCfpyxa58zF6x7xeBmuwD2JEYLX5SRFib
zi/6Ktt1Uhnik7hesc8RtpcAYf4jFlEWfUXXRk2d2QKBgQDvOj9IYt/ojNOFCtdh
iHvCn8zfowcOWqw9AEaOp/l8URTAOfbS3ARga3w7vu38mguP3rJz1LvA072/aUMX
tujjExSl2xNG0Sp8+kqzhfOdJ58e//ULmRPlT23g6rflP6EHgIsSRfgavP6SLJyA
twVcz1FW8BdgVrcmS56Qg1QHCQKBgQDiB+DT6EIs13OUWR6RPnvstA3ZHZcJtsR6
P4FLpB0P868h7BS9p6LxSDTVC/o+Nyh8H07WvtO62nnTy/8efx4ZXgPeuB5svSL7
Fdnu7Pbg/s0Bm3fMz8aRl8Vvn80brRyIRinD5of293cDvw2gS5je+mLJQhXw7yIg
uVkfW4TKswKBgQCsQY7LupZrxuuPwuyviC1FSPemmKc+CMA49HfZxM36XA/LEnHO
BysHmp3MD4EiAHIO2FY63ZWMFWtt5oevDb/HsjeN7Z+FwJsNftRHTE7MfHkxQzDZ
dxJCbd06tQhRhG2ZD1AUillKN4g/DOxsKl0sJQP2y86pSgd7BbxZZpccsQKBgHiC
9s5E4TODU+5ebbvG8s/LWC7QZf0Z4zvCrC8mOxCMPm35rz1HKcs3UmPc1Pli80Tq
dGBusfjID3hrJYSfBe9Efw+6Xw5e8U2p4t5OnXpsn+UhfQhIJ3js0KmpK/R7oeDO
d+oo+Ykle+EVdjBm3gTUvuLLR2OEPE/yQqBDbVOdAoGBAMkYKeV5JqZZ8cnjm7jU
OJhwLkV16kC5zKPx8zoNcY6uTxMl9RRpiYLR1D/qaCpfxMSHerxKxXdR9ZaBnSoH
t2eURtWJrJ7V9NICSEYTO4ealsN1If3lLeHvvN7xRGZ9GVzx6fp1N1Q5WIDhCAr1
BMNc/yZnnQd+sBtuXOfLwwrA
-----END PRIVATE KEY-----`,
  client_email: 'driveserviceaccount@driveapiforstreaming.iam.gserviceaccount.com',
  client_id: '116235491416912884153',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/driveserviceaccount%40driveapiforstreaming.iam.gserviceaccount.com'
};

// Google Drive folder ID
const GOOGLE_DRIVE_FOLDER_ID = '1XRW5ZIwDLfKU_UAS-E5tidV1OZSC4ndy';

// Initialize Google Drive API
const auth = new google.auth.GoogleAuth({
  credentials: SERVICE_ACCOUNT_CONFIG,
  scopes: ['https://www.googleapis.com/auth/drive.readonly']
});

const drive = google.drive({ version: 'v3', auth });

// API endpoint to fetch images
app.get('/api/images', async (req, res) => {
  try {
    const folderId = req.query.folderId || GOOGLE_DRIVE_FOLDER_ID;
    console.log('Fetching images from Google Drive...');
    console.log('Folder ID:', folderId);
    
    // Get files from the folder
    const response = await drive.files.list({
      q: `'${folderId}' in parents`,
      fields: 'files(id,name,mimeType,createdTime,webContentLink,thumbnailLink)',
      orderBy: 'createdTime desc'
    });

    console.log('Google Drive API response:', response.data);

    // Filter for image files only
    const imageFiles = response.data.files.filter(file => 
      file.mimeType === 'image/jpeg' || 
      file.mimeType === 'image/jpg' || 
      file.mimeType === 'image/png'
    );

    console.log(`Found ${imageFiles.length} image files`);

    if (imageFiles.length === 0) {
      console.log('No image files found. All files:', response.data.files);
      return res.json([]);
    }

    // Transform the data with proxy URLs through our server
    const images = imageFiles.map(file => {
      // Use our server as a proxy to serve images and avoid CORS issues
      const thumbnailUrl = `${BASE_URL}/api/image/${file.id}?size=thumbnail`;
      const fullSizeUrl = `${BASE_URL}/api/image/${file.id}?size=full`;
      
      return {
        id: file.id,
        title: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension
        thumbnailUrl: thumbnailUrl,
        fullSizeUrl: fullSizeUrl,
        createdTime: file.createdTime
      };
    });

    console.log('Returning images:', images.length);
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    console.error('Error details:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch images from Google Drive',
      details: error.message 
    });
  }
});

// API endpoint to serve individual images (proxy to avoid CORS)
app.get('/api/image/:fileId', async (req, res) => {
  try {
    const { fileId } = req.params;
    const { size } = req.query;
    
    console.log(`Serving image ${fileId} with size: ${size}`);
    console.log(`Request from origin: ${req.get('origin') || 'unknown'}`);
    
    // Get the file from Google Drive
    const file = await drive.files.get({
      fileId: fileId,
      alt: 'media'
    }, {
      responseType: 'stream'
    });
    
    // Set appropriate headers for production
    res.set({
      'Content-Type': file.headers['content-type'] || 'image/jpeg',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      'Access-Control-Allow-Origin': process.env.FRONTEND_URL || '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
    });
    
    // Handle errors in the stream
    file.data.on('error', (streamError) => {
      console.error('Stream error for image:', fileId, streamError);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Failed to stream image' });
      }
    });
    
    // Pipe the image stream to the response
    file.data.pipe(res);
    
  } catch (error) {
    console.error('Error serving image:', error);
    console.error('Error details:', error.message);
    console.error('File ID:', req.params.fileId);
    
    if (!res.headersSent) {
      res.status(500).json({ 
        error: 'Failed to serve image',
        details: error.message,
        fileId: req.params.fileId
      });
    }
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Google Drive API server is running' });
});

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../build')));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Google Drive API endpoint: ${BASE_URL}/api/images`);
});
