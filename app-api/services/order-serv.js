const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getAll(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, total_price, created_date, id_user
    FROM order_db
    LIMIT ${offset},${config.listPerPage}`
  );

  return {
    status: 200,
    data: rows,
    length: rows.length,
  };
}

async function create(params) {
  const result = await db.query(
    `INSERT INTO order_db 
    (total_price, id_user) 
    VALUES 
    ('${params.total_price}', '${params.id_user}')`
  );

  if (result.affectedRows) {
    return {
      status: 201,
      mess: "tạo mới order thành công",
      data: params,
    };
  } else {
    return {
      status: 400,
      mess: "Error in creating order",
    };
  }
}

// không cho thay đổi hóa đơn.
async function update(id, params) {
  const result = await db.query(
    `UPDATE order_db 
    SET total_price="${params.total_price}"
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
      mess: "Error in updating order",
    };
  }
}

// không cho xóa hóa đơn
async function remove(id) {
  const result = await db.query(`DELETE FROM order_db WHERE id=${id}`);
  if (result.affectedRows) {
    return {
      status: 201,
      mess: "xóa order thành công",
    };
  } else {
    return {
      status: 400,
      mess: "Error in error order",
    };
  }
}

async function getOrderByUser(id_user, page) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, total_price, created_date, id_user
    FROM order_db
    WHERE id_user = ${id_user}
    LIMIT ${offset},${config.listPerPage}`
  );

  return {
    status: 200,
    data: rows,
    length: rows.length,
  };
}

// hóa đơn chi tiết
async function getOrderDetail(params) {
  const order_db = await db.query(
    `SELECT *
    FROM order_db
    WHERE id = ${params.id_order}`
  );

  const order_detail = await db.query(
    `SELECT *
    FROM order_detail
    WHERE id_order = ${params.id_order}`
  );
  order_db[0].order_detail = order_detail

  let arr_pro_id = []
  order_detail.map((o) => {
    arr_pro_id.push(o.id_product)
  })

  const product = await db.query(
    `SELECT p.id as id_product, p.name, p.price, od.quantity, b.name as brand
    FROM order_detail od
    INNER JOIN product p ON p.id = od.id_product
    INNER JOIN brands b ON b.id = p.id_brand
    WHERE p.id in (${arr_pro_id}) AND od.id_order = ${params.id_order}`
  );
  order_db[0].list_product = product
  order_db[0].length = product.length


  return {
    status: 200,
    data: order_db[0],
  };
}

module.exports = {
  getAll,
  create,
  update,
  remove,
  getOrderByUser,
  getOrderDetail,
};
