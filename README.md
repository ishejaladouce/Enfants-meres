# Enfant Mere - NGO Website

A modern, fully responsive website for Enfant Mere NGO, built with React.js, Tailwind CSS, and Node.js/Express backend.

## 🌟 Features

- **Modern Frontend**: React.js with Tailwind CSS for a beautiful, responsive design
- **RESTful Backend**: Node.js/Express API with MongoDB
- **Blog System**: Full blog functionality with comments
- **Contact Form**: Working contact form with message storage
- **Image Upload**: Support for blog cover images
- **Professional Design**: Clean, modern UI with professional color scheme
- **Fully Responsive**: Works perfectly on all devices

## 📁 Project Structure

```
Enfants-meres/
├── enfantmere-modern/    # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── utils/       # Utilities and API client
│   └── package.json
├── backend/             # Node.js/Express backend
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── server.js        # Main server file
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/enfantmere
FRONTEND_URL=http://localhost:3000
```

4. Create uploads directory:
```bash
mkdir -p uploads/blog
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd enfantmere-modern
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Create a `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
VITE_API_BASE=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Axios** - HTTP client
- **React Icons** - Icon library
- **date-fns** - Date formatting

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📝 API Endpoints

### Blogs
- `GET /api/blogs` - Get all blog posts
- `GET /api/blogs/:slug` - Get a single blog post
- `POST /api/blogs` - Create a new blog post
- `PUT /api/blogs/:id` - Update a blog post
- `DELETE /api/blogs/:id` - Delete a blog post

### Comments
- `POST /api/blogs/:blogId/comments` - Create a comment
- `GET /api/blogs/:blogId/comments` - Get comments for a blog

### Contact
- `POST /api/contact` - Send a contact message
- `GET /api/contact` - Get all messages

## 🎨 Color Scheme

The application uses a professional color palette:
- **Primary**: Blue (#0ea5e9) - Trust, stability
- **Accent**: Purple (#d946ef) - Creativity, compassion
- **Success**: Green (#22c55e) - Growth, positivity

## 📱 Pages

1. **Home** - Hero section, mission, stats, and latest blog posts
2. **About** - Organization story, mission, vision, values, and team
3. **Blog** - List of all blog posts with images and excerpts
4. **Blog Detail** - Full blog post with comments section
5. **Contact** - Contact form and organization information

## 🔒 Security Notes

For production deployment:
- Add authentication for admin routes
- Implement rate limiting
- Add input validation and sanitization
- Use environment variables for sensitive data
- Enable HTTPS
- Add CORS restrictions

## 📦 Building for Production

### Frontend
```bash
cd enfantmere-modern
npm run build
```

### Backend
```bash
cd backend
NODE_ENV=production npm start
```

## 🤝 Contributing

This is a project for Enfant Mere NGO. For contributions, please follow best practices and maintain code quality.

## 📄 License

This project is for Enfant Mere NGO.

## 📞 Contact

- **Email**: sosenfantsmeres@gmail.com
- **Phone**: +250 788 846 405
- **Location**: Rulindo, Mukoto Center, Rwanda

---

Built with ❤️ for Enfant Mere NGO
