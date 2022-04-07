const db = require("./db");

async function getAll() {
  const rows = await db.query(
    `SELECT quantity, price_products, id_order, id_product
    FROM order_detail`
  );

  return {
    status: 200,
    data: rows,
    length: rows.length,
  };
}

async function create(params) {
  params.map((p) => {
    db.query(
      `INSERT INTO order_detail (quantity, price_products, id_order, id_product) 
    VALUES ('${p.quantity}', '${p.price_products}','${p.id_order}', '${p.id_product}')`
    );
  })

  return {
    status: 201,
    mess: "tạo mới order-detail thành công",
    data: params
  };
}

// không cho thay đổi hóa đơn.
async function update(id, params) {
  const result = await db.query(
    `UPDATE order_detail 
    SET quantity="${params.quantity}", price_products="${params.price_products}", 
    WHERE id=${id}`
  );

  if (result.affectedRows) {
    return {
      status: 201,
      mess: "cập nhật thành công",
      data: params,
    };
  } else {
    return {
      status: 400,
      mess: "Error in updating order-detail",
    };
  }
}

// không cho xóa hóa đơn
async function remove(id) {
  const result = await db.query(`DELETE FROM order_detail WHERE id_order=${id}`);
  if (result.affectedRows) {
    return {
      status: 201,
      mess: "xóa order-detail thành công",
    };
  } else {
    return {
      status: 400,
      mess: "Error in error order-detail",
    };
  }
}

module.exports = {
  getAll,
  create,
  update,
  remove,
};
