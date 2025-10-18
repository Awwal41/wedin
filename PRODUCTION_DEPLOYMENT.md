# Production Deployment Guide

## Environment Variables Setup

### Backend Environment Variables
Create a `.env` file in the `backend` directory with:

```env
# Backend Configuration
PORT=5000
BASE_URL=https://your-backend-domain.com
FRONTEND_URL=https://your-frontend-domain.com

# Google Drive Configuration (if using environment variables)
GOOGLE_DRIVE_FOLDER_ID=1XRW5ZIwDLfKU_UAS-E5tidV1OZSC4ndy
```

### Frontend Environment Variables
Create a `.env` file in the root directory with:

```env
# Frontend Configuration
REACT_APP_BACKEND_URL=https://your-backend-domain.com
```

## Common Production Issues & Solutions

### 1. Images Not Loading (White/Blank Images)

**Symptoms:**
- Images appear as white/blank squares
- Console shows CORS errors
- Network tab shows failed requests

**Solutions:**

#### A. Check Environment Variables
Ensure your production environment has the correct URLs:
```bash
# Backend
echo $BASE_URL
echo $FRONTEND_URL

# Frontend  
echo $REACT_APP_BACKEND_URL
```

#### B. Verify CORS Configuration
The backend now includes proper CORS configuration. Make sure your frontend URL is set in `FRONTEND_URL`.

#### C. Check HTTPS/HTTP Mismatch
- If your frontend is HTTPS, your backend must also be HTTPS
- Mixed content (HTTP/HTTPS) will be blocked by browsers

#### D. Test Backend Health
```bash
curl https://your-backend-domain.com/api/health
```

#### E. Test Image Endpoint
```bash
curl -I https://your-backend-domain.com/api/image/SOME_FILE_ID?size=full
```

### 2. Debugging Steps

#### A. Check Browser Console
Look for these error messages:
- CORS errors
- Network failures
- 404/500 errors

#### B. Check Backend Logs
Look for:
- Google Drive API errors
- Authentication issues
- File not found errors

#### C. Test Image URLs
Use the debugging function in the browser console:
```javascript
// In browser console
import { testImageLoading } from './src/services/googleDriveService';
testImageLoading('https://your-backend-domain.com/api/image/FILE_ID?size=full');
```

### 3. Deployment Platforms

#### Heroku
```bash
# Set environment variables
heroku config:set BASE_URL=https://your-app.herokuapp.com
heroku config:set FRONTEND_URL=https://your-frontend.herokuapp.com

# For frontend
heroku config:set REACT_APP_BACKEND_URL=https://your-backend.herokuapp.com
```

#### Vercel
```bash
# In vercel.json or environment variables in dashboard
{
  "env": {
    "REACT_APP_BACKEND_URL": "https://your-backend.vercel.app"
  }
}
```

#### Netlify
```bash
# In netlify.toml or environment variables in dashboard
[build.environment]
  REACT_APP_BACKEND_URL = "https://your-backend.netlify.app"
```

### 4. Google Drive API Issues

#### A. Service Account Permissions
Ensure your service account has access to the Google Drive folder:
1. Go to Google Drive
2. Right-click the folder
3. Share with your service account email
4. Give "Viewer" permissions

#### B. API Quotas
Check if you've hit Google Drive API quotas:
- Go to Google Cloud Console
- Check API quotas and usage

### 5. Testing Checklist

- [ ] Backend health check returns 200
- [ ] Frontend can fetch image list from backend
- [ ] Individual image URLs are accessible
- [ ] No CORS errors in browser console
- [ ] Images load in both gallery and wedding party pages
- [ ] Fallback to static images works if backend fails

### 6. Performance Optimization

#### A. Image Caching
The backend sets cache headers for 1 hour. Consider:
- CDN for image delivery
- Longer cache times for static images
- Image compression

#### B. Error Handling
The system now includes:
- Automatic fallback to static images
- Detailed error logging
- Better error messages

## Quick Fixes

### If images are still not loading:

1. **Check the browser console** for specific error messages
2. **Verify your environment variables** are set correctly
3. **Test the backend API** directly in your browser
4. **Check if your deployment platform** has any specific CORS requirements
5. **Ensure HTTPS** is used consistently across frontend and backend

### Emergency Fallback
If Google Drive images continue to fail, the system will automatically fall back to static images stored in the `public/images` folder.
