# Google Drive API Setup Guide

## Quick Setup (5 minutes)

### Step 1: Get Google API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project: `driveapiforstreaming` (or create a new one)
3. Go to "APIs & Services" → "Library"
4. Search for "Google Drive API" and click "Enable"
5. Go to "APIs & Services" → "Credentials"
6. Click "Create Credentials" → "API Key"
7. Copy the API key

### Step 2: Set Up Environment Variable
Create a file called `.env` in your `wedding-website` folder with:
```
REACT_APP_GOOGLE_API_KEY=your_actual_api_key_here
```

### Step 3: Make Folder Public
1. Go to your Google Drive folder: https://drive.google.com/drive/folders/1XRW5ZIwDLfKU_UAS-E5tidV1OZSC4ndy
2. Right-click the folder → "Share"
3. Change to "Anyone with the link can view"
4. Click "Done"

### Step 4: Test
1. Restart your development server: `npm start`
2. Go to the gallery page
3. Check browser console for "Found X image files in Google Drive"

## What This Will Do
- Automatically fetch all PNG/JPG images from your Google Drive folder
- Use actual file names as image titles
- Sort by creation date (newest first)
- Stream images directly from Google Drive
- Fall back to static images if API fails

## Troubleshooting
- If you see static images: API key not configured correctly
- If you see no images: Check folder permissions
- Check browser console for error messages
