# Google Drive Integration Setup

## Current Implementation

The gallery now supports both Google Drive streaming and static fallback images. It will automatically try Google Drive first and fall back to static images if the API is not configured.

## Setup Steps

### 1. Create Google Cloud Project
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project or select existing one

### 2. Enable Google Drive API
- Navigate to "APIs & Services" > "Library"
- Search for "Google Drive API"
- Click "Enable"

### 3. Create API Key
- Go to "APIs & Services" > "Credentials"
- Click "Create Credentials" > "API Key"
- Copy the API key

### 4. Configure Environment Variables
Create a `.env` file in the `wedding-website` folder:
```bash
REACT_APP_GOOGLE_API_KEY=your_actual_api_key_here
```

### 5. Set Folder Permissions
- In Google Drive, right-click your folder
- Select "Share" > "Change to anyone with the link"
- Copy the folder ID from the URL (already configured: `1XRW5ZIwDLfKU_UAS-E5tidV1OZSC4ndy`)

### 6. Test the Integration
- Start the development server: `npm start`
- Check the browser console for Google Drive API logs
- Images should load from your Google Drive folder

## Features

### ✅ What Works Now:
- **Automatic Fallback**: Uses static images if Google Drive API fails
- **Real-time Streaming**: Images load directly from your Google Drive
- **File Name Titles**: Uses actual file names as image titles
- **Date Sorting**: Sorts by creation date (newest first)
- **Image Filtering**: Only shows PNG and JPG files
- **Responsive Gallery**: Works on all devices

### 🔧 Configuration:
- **Folder ID**: `1XRW5ZIwDLfKU_UAS-E5tidV1OZSC4ndy` (already set)
- **API Key**: Set in `.env` file
- **File Types**: PNG, JPG, JPEG only
- **Permissions**: Folder must be publicly viewable

## Troubleshooting

### If images don't load:
1. Check browser console for error messages
2. Verify API key is correct
3. Ensure folder is set to "Anyone with the link can view"
4. Check that images are PNG or JPG format

### If you see static images:
- This means Google Drive API is not configured
- Follow the setup steps above
- Check that your `.env` file is in the correct location

## Testing

Visit `/gallery` to see your images! The gallery will automatically use Google Drive if configured, or fall back to static images.
