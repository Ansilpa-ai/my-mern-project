
# Fruit-Mart Full-Stack Application

Fruit-Mart is a fully functional, full-stack e-commerce web application built using:

- Node.js + Express (Backend API)

- MongoDB + Mongoose (Database)

- React + Vite (Frontend)

- Multer (File upload)

- Bcrypt (Password hashing)

The platform allows customers to browse products, register/login, add products to cart, and proceed to a checkout workflow.
Administrators can manage products, users, orders, and view dashboard analytics.

This document serves as the technical guide for understanding, installing, configuring, and extending the Fruit-Mart application.


## 1. System Architecture

```
 ┌─────────────────────────┐            ┌──────────────────────────────┐
 │         Frontend        │            │           Backend            │
 │  React (Vite)           │◀────────▶ │ Node.js + Express API        │
 │  React Router           │   HTTP     │ Controllers / Routers        │
 │  Axios API Calls        │            │ MongoDB (Mongoose Models)    │
 └─────────────────────────┘            └──────────────────────────────┘
```

## 2. Project Directory Structure
```
Fruit-Mart-FullStack-Website-main/
│
├── node/                  # Backend (Express + MongoDB)
│   ├── Controller/        # Logic for user, admin, products, cart
│   ├── Model/             # Mongoose schemas
│   ├── Router/            # API route definitions
│   ├── Server.js          # Backend entry point
│   ├── .env               # Environment config
│   ├── package.json       # Backend dependencies
│
└── react/                 # Frontend (React + Vite)
    ├── src/
    ├── package.json
    └── vite.config.js
```

## 3. Features Summary
### User Features

- Register account

- Login

- Browse all products

- Add to cart

- Manage cart (increase/decrease/remove)

- Checkout payment screen

### Product Features

- Product listing

- Product details

- Multiple image upload (multer)

### Admin Features

- Admin dashboard

- View all users

- View all orders

- Add / edit / delete products

- Low stock alerts

### System Features

- Secure password hashing (bcrypt)

- MongoDB database with Mongoose models

- CORS-enabled backend (cors)

- Fully decoupled frontend & backend
## 4. Installation Guide
### 4.1 Requirements

- Node.js 16+

- npm 8+

- MongoDB local instance or MongoDB Atlas

- Git (optional)

### 4.2 Backend Setup (Node + Express)
#### Step 1 — Install backend dependencies
```
cd node
npm install
```

#### Step 2 — Configure environment variables

Create a .env file inside the node/ folder:
```
PORT=9000
MONGO_URL=mongodb://localhost:27017/Choco_Table
```

#### Step 3 — Start backend server
```
npm run start
```

*Your backend should now run at:*

👉 **http://localhost:9000**


### 4.3 Frontend Setup (React + Vite)

Step 1 — Install frontend dependencies
cd react
npm install

Step 2 — Run frontend development server
npm run dev

*Default Vite port:*

👉 **http://localhost:5173**


## 5. API Documentation (Server Endpoints)

### 5.1 Authentication Routes
| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| POST   | `/register` | Register a new user |
| POST   | `/login`    | Login user          |


### 5.2 Product Routes
| Method | Endpoint             | Description                                  |
| ------ | -------------------- | -------------------------------------------- |
| POST   | `/addproduct`        | Add product (supports multiple image upload) |
| GET    | `/viewproduct`       | Get all products                             |
| DELETE | `/deleteproduct`     | Delete product (id likely in body/query)     |
| GET    | `/editproduct/:id`   | Get product details                          |
| PUT    | `/updateproduct/:id` | Update product                               |


### 5.3 Cart Routes
| Method | Endpoint        | Description                 |
| ------ | --------------- | --------------------------- |
| POST   | `/add`          | Add item to cart (inferred) |
| GET    | `/viewcart/:id` | Get user cart               |
| PUT    | `/increase/:id` | Increase quantity           |
| PUT    | `/decrease/:id` | Decrease quantity           |
| DELETE | `/delete/:id`   | Remove item                 |


### 5.4 Admin Routes
| Method | Endpoint     | Description                |
| ------ | ------------ | -------------------------- |
| GET    | `/dashboard` | Admin dashboard statistics |
| GET    | `/users`     | Get all users              |
| GET    | `/orders`    | Get all orders             |
| GET    | `/lowstock`  | Low stock alert            |
| POST   | `/order`     | Create order               |




## 6. Database Models
### UserModel

- Username

- Email

- Password (bcrypt-hashed)

### ProductModel

- Name

- Price

- Description

- Quantity

- Image paths (multer uploads)

### CartModel

- userId (ref User)

- productId (ref Product)

- Quantity

- Price

### OrderModel

- userId

- Items

- Totals

- Timestamp
## 7. Environment Variables Reference
```
PORT=9000
MONGO_URL=mongodb://localhost:27017/Choco_Table

JWT_SECRET=your-secret            # if adding token authentication
UPLOADS_DIR=uploads/              # for multer
CLIENT_URL=http://localhost:5173  # for CORS configuration
```
## 8. Running the System in Development
### Start backend:
```
cd node
npm run start
```

### Start frontend:
```
cd react
npm run dev
```


**Start both simultaneously (recommend using 2 terminals)**

*Terminal 1 → backend*

*Terminal 2 → frontend*
## 9. Troubleshooting
| Issue                  | Possible Fix                                             |
| ---------------------- | -------------------------------------------------------- |
| *MongoNetworkError*    | Ensure MongoDB service is running or correct MongoDB URI |
| *CORS blocked*         | Configure allowed origin in backend (`cors`)             |
| *Images not uploading* | Check multer storage folder permissions                  |
| *Port already in use*  | Modify `PORT` in `.env`                                  |

## License
This project is licensed under the MIT License:

MIT License

Copyright (c) 2025 Fruit-Mart Full-Stack Application Developers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING  
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER  
DEALINGS IN THE SOFTWARE.

---

### 👨‍💻 Designed & Developed By  
**Ansil Ibn Abdul Razak**  
📧 Email: **ansilpa211@gmail.com**

---
