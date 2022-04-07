const express = require("express");
const router = express.Router();
const orderServ = require("../services/order-serv");

router.get("/", async function (req, res, next) {
  try {
    res.json(await orderServ.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting order `, err.message);
    next(err);
  }
});

router.post("/create", async function (req, res, next) {
  try {
    res.json(await orderServ.create(req.body));
  } catch (err) {
    console.error(`Error while creating order`, err.message);
    next(err);
  }
});

// chức năng cập nhật, xóa order không cho hoạt động

// router.put('/update/:id', async function(req, res, next) {
//   try {
//     res.json(await orderServ.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating order`, err.message);
//     next(err);
//   }
// });

// router.delete('/delete/:id', async function(req, res, next) {
//   try {
//     res.json(await orderServ.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting order`, err.message);
//     next(err);
//   }
// });

router.get("/get-by-user/:id_user", async function (req, res, next) {
  try {
    res.json(await orderServ.getOrderByUser(req.params.id_user ,req.query.page));
  } catch (err) {
    console.error(`Error while getting order `, err.message);
    next(err);
  }
});

module.exports = router;
