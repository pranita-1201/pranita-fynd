<<<<<<< HEAD
# Jewelry Store Application

A full-stack e-commerce application for a jewelry store built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User authentication and authorization
- Product catalog with categories
- Admin dashboard for product management
- User profile management
- Secure API endpoints
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd jewelry-store
```

2. Install backend dependencies
```bash
npm install
```

3. Set up environment variables
Create a .env file in the root directory and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. Install frontend dependencies
```bash
cd frontend
npm install
```

## Running the Application

### Development mode

Run backend and frontend concurrently:
```bash
npm run dev
```

Or run them separately:

Backend only:
```bash
npm run server
```

Frontend only:
```bash
npm run client
```

### Production mode
```bash
npm start
```

## API Endpoints

### Products
- GET /api/products - Get all products
- GET /api/products/:id - Get single product
- POST /api/products - Create product (Admin only)
- PUT /api/products/:id - Update product (Admin only)
- DELETE /api/products/:id - Delete product (Admin only)

### Users
- POST /api/users/register - Register user
- POST /api/users/login - Login user
- GET /api/users/profile - Get user profile (Protected)
- PUT /api/users/profile - Update user profile (Protected)
- GET /api/users - Get all users (Admin only)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
=======
# pranita-fynd
>>>>>>> 304817aa65f0feb32c71b718e02c1dedb86223a3
