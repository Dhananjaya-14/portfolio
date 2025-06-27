# Dhana's Portfolio - UI/UX Designer

A modern, responsive portfolio website built with React and TypeScript, featuring a beautiful dark theme design.

## 🚀 Features

- **Dark Theme Design** - Modern dark aesthetic with gradient accents
- **Responsive Layout** - Works perfectly on all devices
- **Smooth Animations** - Engaging scroll animations and hover effects
- **Professional Sections** - Hero, About, Skills, Projects, Contact, and Footer
- **Interactive Elements** - Smooth scrolling navigation and form handling

## 📸 Adding Your Profile Photo

To add your profile photo to the Hero section:

1. **Add your photo** to the `src` folder:
   - Name it `profile-image.jpg` (or update the path in `src/components/Hero.tsx`)
   - Recommended size: 400x400 pixels or larger (square aspect ratio)
   - Supported formats: JPG, PNG, WebP

2. **Update the image path** in `src/components/Hero.tsx` if needed:
   ```jsx
   <img 
     src={profileImage} 
     alt="Your Name - UI/UX Designer"
   />
   ```

3. **The photo will automatically**:
   - Display in a circular frame with gradient border
   - Show a beautiful glow effect
   - Scale and zoom on hover
   - Fall back to a placeholder if the image doesn't load

## 🖼️ Adding Project Images

To add your project images to the Projects section:

1. **Create a project-images folder** in the `public` directory:
   ```bash
   mkdir public/project-images
   ```

2. **Add your project images** to `public/project-images/`:
   - `sienna-retreat.jpg` - SIENNA RETREAT web UI
   - `microimage-clone.jpg` - Microimage Clone
   - `fitness-app.jpg` - Fitness Tracking App
   - `food-delivery.jpg` - Food Delivery App
   - `music-app.jpg` - 3D Music app

3. **Image specifications**:
   - **Recommended size**: 600x400 pixels (3:2 aspect ratio)
   - **Supported formats**: JPG, PNG, WebP
   - **File size**: Keep under 500KB for fast loading

4. **Update image paths** in `src/components/Projects.tsx` if needed:
   ```jsx
   image: '/project-images/your-image-name.jpg'
   ```

5. **The images will automatically**:
   - Display in project cards with hover effects
   - Scale and zoom on hover
   - Show overlay with "View Project" button
   - Fall back to placeholder if image doesn't load

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and visit `http://localhost:3000`

## 🎨 Customization

### Colors & Theme
- Main background: `#0a0a0a`
- Card background: `#1a1a1a`
- Text colors: `#e0e0e0` (headings), `#a0a0a0` (body)
- Accent gradient: `#667eea` to `#764ba2`

### Content Updates
- **Personal Info**: Update text content in each component
- **Projects**: Add your projects in `src/components/Projects.tsx`
- **Skills**: Modify skills and percentages in `src/components/Skills.tsx`
- **Contact**: Update contact information in `src/components/Contact.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (480px - 767px)
- Small Mobile (< 480px)

## 🚀 Deployment

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using React, TypeScript, and CSS**
