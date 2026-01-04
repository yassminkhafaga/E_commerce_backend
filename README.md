####
A complete E-Commerce Backend REST API built using Node.js, Express, and MongoDB.
The API handles authentication, users, products, categories, subcategories, cart, orders, and reviews with role-based authorization.

🛠 Tech Stack
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Multer (Image Upload)
Role-Based Authorization (Admin / User)

✨ Features
Authentication & Authorization (JWT)
Admin & User roles
Product management with image upload
Category & Subcategory management
Shopping cart
Orders system
Reviews system
Secure protected routes

🔐 Authentication
Protected routes require a JWT token in headers:
Authorization: Bearer <token>

🔗 API Endpoints

🔑 Auth

Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	Login user

👤 Users

Method	Endpoint	Role	Description
POST	/users	Public	Add user
POST	/users/addadmin	Admin	Add admin
GET	/users/getallusers	Admin	Get all users

📦 Products

Method	Endpoint	Role	Description
GET	/products	Public	Get all products
GET	/products/:slug	Public	Get product by slug
GET	/products/subcategory/:id	Public	Get products by subcategory
GET	/products/category/:id	Public	Get products by category
POST	/products	Admin	Add product
PUT	/products/:id	Admin	Update product
DELETE	/products/:id	Admin	Delete product

🗂 Categories

Method	Endpoint	Role	Description
GET	/category	Public	Get all categories
GET	/category/with-subcategories	Public	Get categories with subcategories
GET	/category/:categoryId	Public	Get subcategories by category
POST	/category	Admin	Add category
PUT	/category/:id	Admin	Update category
DELETE	/category/:id	Admin	Delete category

🧩 Subcategories

Method	Endpoint	Role	Description
GET	/subcategory	Public	Get all subcategories
POST	/subcategory	Admin	Add subcategory
DELETE	/subcategory/:id	Admin	Delete subcategory

🛒 Cart

Method	Endpoint	Role	Description
POST	/cart	User	Add item to cart
GET	/cart	User	Get my cart
POST	/cart/remove	User	Remove item
POST	/cart/clearCart	User	Clear cart
PUT	/cart/quantity	User	Update quantity
PUT	/cart/update-quantity	User	Update item quantity
GET	/cart/item/:product_id	User	Get cart item

📑 Orders

Method	Endpoint	Role	Description
POST	/order	User	Create order
GET	/order/myorder	User	Get my orders
GET	/order	Admin	Get all orders
PUT	/order/admin/:id	Admin	Update order status (admin)
PUT	/order/user/:id	User	Update order status (user)

⭐ Reviews

Method	Endpoint	Role	Description
POST	/review	User	Add review
GET	/review/myreviews	User	Get my reviews
GET	/review	Admin	Get all reviews
PUT	/review/:id	Admin	Change review status


▶️ Run the Project
npm start
