const express = require("express");
const router = express.Router();
const productServ = require("../services/product-serv");

router.get("/", async function (req, res, next) {
  try {
    res.json(await productServ.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

router.post("/create", async function (req, res, next) {
  try {
    res.json(await productServ.create(req.body));
  } catch (err) {
    console.error(`Error while creating product`, err.message);
    next(err);
  }
});

router.put('/update/:id', async function(req, res, next) {
  try {
    res.json(await productServ.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating product`, err.message);
    next(err);
  }
});

router.delete('/delete/:id', async function(req, res, next) {
  try {
    res.json(await productServ.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting product`, err.message);
    next(err);
  }
});

module.exports = router;
