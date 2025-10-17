# 💕 Oluwatobi & Dorcas Wedding Website

A beautiful, modern wedding website built with React and Tailwind CSS, featuring a romantic dusty pink and soft green color palette. Celebrating their union on December 21, 2025 in Houston, Texas.

## 🌸 Features

- **Responsive Design**: Fully mobile-friendly with smooth transitions
- **Three Main Pages**:
  - **Home**: Carousel of couple photos with overlay text
  - **Our Story**: Timeline of your relationship with alternating image/text layout
  - **Registry**: Amazon registry link with elegant styling
- **Modern Animations**: Smooth transitions and hover effects using Framer Motion
- **Custom Color Palette**: Dusty pink (#D8A7B1) and soft green (#A7C4A0) theme
- **Typography**: Beautiful script and serif fonts for a romantic feel

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd wedding-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📸 Adding Your Photos

1. Replace the placeholder images in the `public/images/` directory:
   - `couple1.jpg`, `couple2.jpg`, `couple3.jpg`, `couple4.jpg` for the home page carousel
   - `how-we-met.jpg`, `proposal.jpg`, `our-journey.jpg` for the story page

2. Recommended image specifications:
   - Format: JPG or PNG
   - Resolution: 1920x1080 or higher for carousel images
   - File size: Under 2MB per image
   - Aspect ratio: 16:9 for carousel, any ratio for story images

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.js`:
- Dusty Pink: `#D8A7B1`
- Soft Green: `#A7C4A0`
- Cream: `#F8F5F2`
- Text Gray: `#4B3B40`

### Content
- Update couple names in `src/components/Navbar.tsx`
- Modify story content in `src/pages/OurStory.tsx`
- Update registry link in `src/pages/Registry.tsx`
- Change wedding date and location in `src/pages/Home.tsx`

### Fonts
The website uses Google Fonts:
- Dancing Script (script font for headings)
- Playfair Display (serif font for body text)

## 🛠️ Built With

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and responsive design
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React Slick** - Image carousel
- **React Icons** - Icon library

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1280px and up)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

## 📄 License

This project is created for personal use. Feel free to customize it for your own wedding!

## 💝 Credits

- Color palette inspired by romantic wedding themes
- Fonts from Google Fonts
- Icons from React Icons
- Built with love for Oluwatobi & Dorcas

---

**Happy Wedding Planning! 💕**