const express = require("express");
const router = express.Router();
const userServ = require("../services/users-serv");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await userServ.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

module.exports = router;
