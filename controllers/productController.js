let currentId = 1;
let products = [];

//Finding the all products
exports.getAllProducts = (req, res) => {
  const { page, limit } = req.query;

  let result = [...products];

  // Pagination
  if (page && limit) {
    const start = (page - 1) * limit;
    const end = start + parseInt(limit);
    result = result.slice(start, end);
  }

  res.json(result);
};

// Finding a product by ID
exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
};

//Creating a new product
exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;

  // Input validation
  if (!name || typeof price !== "number") {
    return res
      .status(400)
      .json({ error: "Name is required and price must be a number!" });
  }

  const newProduct = {
    id: currentId++,
    name,
    price,
    description: description || "",
  };
  // Adding the new product to the products array
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// Updating an existing product
exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, description } = req.body;

  const product = products.find((p) => p.id === id); // We are searching for the product by ID
  if (!product) return res.status(404).json({ error: "Product not found" });

  // Setting new values if provided
  if (name) product.name = name;
  if (typeof price === "number") product.price = price;
  if (description) product.description = description;

  res.json(product);
};

// Deleting a product
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) return res.status(404).json({ error: "Product not found" });

  products.splice(index, 1);
  res.status(204).send();
};

// Searching for products by name
exports.searchProduct = (req, res) => {
  const { q } = req.query;
  const result = products.filter((p) =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );
  res.json(result);
};
