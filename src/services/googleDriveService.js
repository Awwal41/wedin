// Google Drive API service for streaming images
// This service fetches images from our backend API (which uses service account)

// Configuration
const BACKEND_API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
const USE_BACKEND_API = true; // Set to true to use backend API with service account

// Fallback static images in case Google Drive API fails
const staticImages = [
  {
    id: '1',
    title: 'Beautiful Wedding Moment',
    thumbnailUrl: '/images/2022_after_church.JPG',
    fullSizeUrl: '/images/2022_after_church.JPG',
    createdTime: '2022-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'June 2025 Memories',
    thumbnailUrl: '/images/June_2025.jpg',
    fullSizeUrl: '/images/June_2025.jpg',
    createdTime: '2025-06-01T00:00:00Z'
  },
  {
    id: '3',
    title: 'Special Day',
    thumbnailUrl: '/images/DSC00763.JPEG',
    fullSizeUrl: '/images/DSC00763.JPEG',
    createdTime: '2025-01-01T00:00:00Z'
  },
  {
    id: '4',
    title: 'Church Conference',
    thumbnailUrl: '/images/church_conference_june_2025.JPG',
    fullSizeUrl: '/images/church_conference_june_2025.JPG',
    createdTime: '2025-06-15T00:00:00Z'
  },
  {
    id: '5',
    title: 'Converge Conference',
    thumbnailUrl: '/images/Dorcas_s_first_converge_conference_2024.JPG',
    fullSizeUrl: '/images/Dorcas_s_first_converge_conference_2024.JPG',
    createdTime: '2024-12-01T00:00:00Z'
  },
  {
    id: '6',
    title: 'Louisiana Visit',
    thumbnailUrl: '/images/visit_louisiana_september_2025.jpg',
    fullSizeUrl: '/images/visit_louisiana_september_2025.jpg',
    createdTime: '2025-09-01T00:00:00Z'
  },
  {
    id: '7',
    title: 'Louisiana Memories',
    thumbnailUrl: '/images/visit_louisiana_september_2025_2.jpg',
    fullSizeUrl: '/images/visit_louisiana_september_2025_2.jpg',
    createdTime: '2025-09-01T00:00:00Z'
  },
  {
    id: '8',
    title: 'Birthday Celebration',
    thumbnailUrl: '/images/visit_shreveport_tobi_birthday_september_2025.jpg',
    fullSizeUrl: '/images/visit_shreveport_tobi_birthday_september_2025.jpg',
    createdTime: '2025-09-15T00:00:00Z'
  }
];

// Method 1: Backend API (uses service account credentials)
const fetchImagesFromBackendAPI = async (folderId = null) => {
  try {
    console.log('Fetching images from backend API...');
    
    const url = folderId 
      ? `${BACKEND_API_URL}/api/images?folderId=${folderId}`
      : `${BACKEND_API_URL}/api/images`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Backend API error: ${response.status}`);
    }
    
    const images = await response.json();
    console.log(`Found ${images.length} images from Google Drive via backend`);
    
    return images;
    
  } catch (error) {
    console.error('Error fetching from backend API:', error);
    throw error;
  }
};

// Method 2: Direct Google Drive API (legacy - not used with backend)
const fetchImagesFromGoogleDriveAPI = async () => {
  try {
    console.log('This method is not used with backend API setup');
    throw new Error('Direct Google Drive API not configured');
  } catch (error) {
    console.error('Error with direct Google Drive API:', error);
    throw error;
  }
};

// Main function to fetch images (tries backend API first, falls back to static)
export const fetchImagesFromDrive = async (folderId = null) => {
  try {
    // Try backend API first (uses service account)
    if (USE_BACKEND_API) {
      console.log('Using backend API with service account...');
      return await fetchImagesFromBackendAPI(folderId);
    }
    
    // Fall back to static images
    console.log('Using static images (backend API disabled)');
    throw new Error('Backend API disabled');
    
  } catch (error) {
    console.log('Falling back to static images due to error:', error.message);
    
    // Fallback to static images
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
    return staticImages.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));
  }
};

// Get a single image by ID
export const getImageById = async (imageId) => {
  try {
    // First try to get from current images (could be from Google Drive or static)
    const images = await fetchImagesFromDrive();
    const image = images.find(img => img.id === imageId);
    
    if (!image) {
      throw new Error('Image not found');
    }
    
    return image;
  } catch (error) {
    console.error('Error fetching image by ID:', error);
    throw error;
  }
};
