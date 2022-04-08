const express = require("express");
const router = express.Router();
const brandServ = require("../services/brands-serv");

router.get("/", async function (req, res, next) {
  try {
    res.json(await brandServ.getAll(req.query));
  } catch (err) {
    console.error(`Error while getting brand `, err.message);
    next(err);
  }
});

router.post("/create", async function (req, res, next) {
  try {
    res.json(await brandServ.create(req.body));
  } catch (err) {
    console.error(`Error while creating brand`, err.message);
    next(err);
  }
});

router.put('/update/:id', async function(req, res, next) {
  try {
    res.json(await brandServ.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating brand`, err.message);
    next(err);
  }
});

router.delete('/delete/:id', async function(req, res, next) {
  try {
    res.json(await brandServ.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting brand`, err.message);
    next(err);
  }
});

module.exports = router;
