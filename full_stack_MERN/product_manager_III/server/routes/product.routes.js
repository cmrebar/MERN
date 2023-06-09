const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createNewProduct);
    app.get("/api/products/:id", ProductController.getOneProduct);
    app.put("/api/products/:id", ProductController.updateExistingProduct);
    app.delete("/api/products/:id", ProductController.deleteAnExistingProduct);
}