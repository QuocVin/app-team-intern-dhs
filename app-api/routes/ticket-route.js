const express = require("express");
const router = express.Router();
const ticketServ = require("../services/ticket-serv");

router.get("/", async function (req, res, next) {
  try {
    res.json(await ticketServ.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting ticket `, err.message);
    next(err);
  }
});

router.post("/create", async function (req, res, next) {
  try {
    res.json(await ticketServ.create(req.body));
  } catch (err) {
    console.error(`Error while creating ticket`, err.message);
    next(err);
  }
});

router.put('/update/:id', async function(req, res, next) {
  try {
    res.json(await ticketServ.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating ticket`, err.message);
    next(err);
  }
});

router.delete('/delete/:id', async function(req, res, next) {
  try {
    res.json(await ticketServ.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting ticket`, err.message);
    next(err);
  }
});

module.exports = router;
