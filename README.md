# 🛒 Product Inventory REST API

A simple REST API built with **Node.js** and **Express.js** to perform CRUD operations on an in-memory product inventory.

GitHub Repo: [Product_Inventory_Api](https://github.com/pratap-jaihind/Product_Inventory_Api)

---

## Features

- Create, Read, Update, and Delete (CRUD) operations
- Search products by name (`/products/search?q=shoe`)
- Pagination support (`/products?page=1&limit=10`)
- Input validation (name required, price must be a number)
- Modular code structure (controllers + routes)
- In-memory product storage (no database)

---

## Tech Stack

- Node.js
- Express.js
- Nodemon (for development)

---

## Folder Structure

product-inventory-api/
■■■ controllers/
■ ■■■ productController.js
■■■ routes/
■ ■■■ productRoutes.js
■■■ app.js
■■■ package.json

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pratap-jaihind/Product_Inventory_Api.git
cd Product_Inventory_Api


1. Install dependencies
npm install

2. Start the server
npm start

Or with nodemon:
npx nodemon app.js

Server will run at: http://localhost:3000


Endpoints of api:
| Method | Endpoint | Description |
|--------|------------------|------------------------------|
| GET | /products | Get a list of all products |
| GET | /products/:id | Get a single product by ID |
| POST | /products | Add a new product |
| PUT | /products/:id | Update an existing product |
| DELETE | /products/:id | Delete a product by ID |
```
