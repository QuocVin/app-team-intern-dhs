const express = require("express");
const router = express.Router();
const orderDetailServ = require("../services/order-detail-serv");

router.get("/", async function (req, res, next) {
  try {
    res.json(await orderDetailServ.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting order `, err.message);
    next(err);
  }
});

router.post("/create", async function (req, res, next) {
  try {
    res.json(await orderDetailServ.create(req.body));
  } catch (err) {
    console.error(`Error while creating order`, err.message);
    next(err);
  }
});

// chức năng cập nhật, xóa order không cho hoạt động

// router.put('/update/:id', async function(req, res, next) {
//   try {
//     res.json(await orderDetailServ.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating order`, err.message);
//     next(err);
//   }
// });

// router.delete('/delete/:id', async function(req, res, next) {
//   try {
//     res.json(await orderDetailServ.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting order`, err.message);
//     next(err);
//   }
// });

module.exports = router;
