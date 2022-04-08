const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const usersRouter = require("./routes/users-route");
const productRouter = require("./routes/product-route");
const brandRouter = require("./routes/brands-route");
const ticketRouter = require("./routes/ticket-route");
const orderRouter = require("./routes/order-route");
const orderDetailRouter = require("./routes/order-detail-route");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/users", usersRouter);
app.use("/products", productRouter);
app.use("/brands", brandRouter);
app.use("/tickets", ticketRouter);
app.use("/orders", orderRouter);
app.use("/order-detail", orderDetailRouter);


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});