const db = require("./db");

async function getAll() {
  const rows = await db.query(
    `SELECT id, total_price, created_date, id_user
    FROM order_db`
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

module.exports = {
  getAll,
  create,
  update,
  remove,
};
