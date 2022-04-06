const express = require("express");
const router = express.Router();
const productServ = require("../services/product-serv");

/* GET */
router.get("/getProducts", async function (req, res, next) {
  try {
    res.json(await productServ.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});


module.exports = router;
