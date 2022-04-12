const express = require("express");
const router = express.Router();
const userServ = require("../services/users-serv");

/* GET */
router.get("/", async function (req, res, next) {
  try {
    res.json(await userServ.getAll(req.query));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

/* POST */
router.post("/create", async function (req, res, next) {
  try {
    res.json(await userServ.createUser(req.body));
  } catch (err) {
    console.error(`Error while creating users`, err.message);
    next(err);
  }
});

/* PUT */
router.put('/update/:id', async function(req, res, next) {
  try {
    res.json(await userServ.updateUser(req.params.id,req.body));
  } catch (err) {
    console.error(`Error while updating users`, err.message);
    next(err);
  }
});

/* DELETE */
router.delete('/delete/:id', async function(req, res, next) {
  try {
    res.json(await userServ.deleteUser(req.params.id));
  } catch (err) {
    console.error(`Error while deleting users`, err.message);
    next(err);
  }
});

/* POST */
router.post("/authentication", async function (req, res, next) {
  try {
    res.json(await userServ.authentication(req.body));
  } catch (err) {
    console.error(`Error while found users`, err.message);
    next(err);
  }
});

router.get('/user-detail/:id', async function(req, res, next) {
  try {
    res.json(await userServ.getUserById(req.params.id));
  } catch (err) {
    console.error(`Error while getting user`, err.message);
    next(err);
  }
});

router.post('/user-detail/change-password', async function(req, res, next) {
  try {
    res.json(await userServ.changePass(req.body));
  } catch (err) {
    console.error(`Error while getting user`, err.message);
    next(err);
  }
});

module.exports = router;
