const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

//middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors((origin = "*")));


//routes
app.use("/product", require("./routes/product.route"));
app.use("/user", require("./routes/user.route"));
app.use("/category", require("./routes/category.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/subcategory", require("./routes/subcategory.route"));
app.use("/order", require("./routes/order.route"));
app.use("/cart", require("./routes/cart.route"));
app.use("/review", require("./routes/review.route"));

app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});


module.exports = app;