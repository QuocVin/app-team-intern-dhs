const express = require("express");
const router = express.Router();
const userServ = require("../services/users-serv");

/* GET */
router.get("/", async function (req, res, next) {
  try {
    res.json(await userServ.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

/* POST */
router.post("/", async function (req, res, next) {
  try {
    res.json(await userServ.create(req.body));
  } catch (err) {
    console.error(`Error while creating users`, err.message);
    next(err);
  }
});

/* PUT */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await userServ.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating users`, err.message);
    next(err);
  }
});

/* DELETE */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await userServ.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting users`, err.message);
    next(err);
  }
});

module.exports = router;
