# Backend Setup for Google Drive Integration

## Overview
This setup uses your service account credentials to securely fetch images from Google Drive and serve them to your frontend.

## Quick Setup (5 minutes)

### Step 1: Install Backend Dependencies
```bash
cd wedding-website/backend
npm install
```

### Step 2: Start Backend Server
```bash
npm start
```
The backend will run on `http://localhost:5000`

### Step 3: Start Frontend (in new terminal)
```bash
cd wedding-website
npm start
```
The frontend will run on `http://localhost:3000`

### Step 4: Test
1. Go to `http://localhost:3000/gallery`
2. Check browser console for "Found X images from Google Drive via backend"
3. Images should load from your Google Drive folder

## What This Does

### Backend (Port 5000):
- Uses your service account credentials securely
- Fetches images from Google Drive folder: `1XRW5ZIwDLfKU_UAS-E5tidV1OZSC4ndy`
- Provides API endpoint: `/api/images`
- Filters for PNG/JPG files only
- Sorts by creation date (newest first)

### Frontend (Port 3000):
- Calls backend API to get images
- Displays images in responsive gallery
- Falls back to static images if backend fails

## API Endpoints

- `GET /api/images` - Get all images from Google Drive
- `GET /api/health` - Check if server is running

## Troubleshooting

### If you see static images:
1. Check if backend is running: `http://localhost:5000/api/health`
2. Check backend console for errors
3. Verify Google Drive folder permissions

### If backend won't start:
1. Make sure you're in the `backend` folder
2. Run `npm install` to install dependencies
3. Check for any error messages

## Security Notes
- Service account credentials are only used on the backend
- Frontend never sees the private key
- Images are streamed directly from Google Drive
