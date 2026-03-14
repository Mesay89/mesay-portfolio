# Personal Portfolio Website - MERN Stack

A modern, responsive personal portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- **Modern Design**: Clean, professional design with dark/light theme toggle
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth animations using Framer Motion
- **Interactive**: Dynamic contact form with email integration
- **Projects Showcase**: Filterable project gallery
- **Skills Display**: Animated skill bars with technology icons
- **SEO Friendly**: Optimized for search engines

## Tech Stack

### Frontend
- React 18
- Framer Motion (animations)
- React Icons
- Axios (API calls)
- CSS3 with custom properties

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer (email functionality)
- CORS enabled

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   ```bash
   cd ../server
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   - MongoDB connection string
   - Email credentials for contact form

5. **Start the development servers**
   
   Terminal 1 (Backend):
   ```bash
   cd server
   npm run dev
   ```
   
   Terminal 2 (Frontend):
   ```bash
   cd client
   npm start
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Customization

### Personal Information
1. Update `client/src/components/Hero.js` with your name and title
2. Replace placeholder images in `client/src/components/About.js` and `Hero.js`
3. Update contact information in `client/src/components/Contact.js`
4. Modify social media links throughout the components

### Adding Your Photo
Replace the placeholder divs in:
- `Hero.js` - Main profile image
- `About.js` - About section photo

### Projects
Add your projects by:
1. Using the MongoDB database (recommended)
2. Modifying the `demoProjects` array in `client/src/components/Projects.js`

### Skills
Update the skills array in `client/src/components/Skills.js` with your technologies.

### Styling
- Colors and themes: `client/src/styles/index.css` (CSS custom properties)
- Component-specific styles: Individual CSS files in `client/src/styles/`

## Deployment

### Frontend (Netlify/Vercel)
1. Build the client: `cd client && npm run build`
2. Deploy the `build` folder

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy the `server` folder

### Full Stack (Railway/Render)
Use the provided `package.json` scripts for full-stack deployment.

## API Endpoints

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `POST /api/contact` - Send contact form email

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you find this helpful, please give it a ⭐ on GitHub!