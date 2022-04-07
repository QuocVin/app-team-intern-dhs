const db = require("./db");

async function getAll() {
  const rows = await db.query(
    `SELECT id, name, percent, date_use
    FROM ticket`
  );

  return {
    status: 200,
    data: rows,
    length: rows.length,
  };
}

async function create(params) {
  const result = await db.query(
    `INSERT INTO ticket 
    (name, percent, date_use) 
    VALUES 
    ('${params.name}', '${params.percent}', '${params.date_use}')`
  );

  if (result.affectedRows) {
    return {
      status: 201,
      mess: "tạo mới ticket thành công",
      data: params,
    };
  } else {
    return {
      status: 400,
      mess: "Error in creating ticket",
    };
  }
}

async function update(id, params) {
  const result = await db.query(
    `UPDATE ticket 
    SET name="${params.name}", percent="${params.percent}", date_use="${params.date_use}"
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
      mess: "Error in updating ticket",
    };
  }
}

async function remove(id) {
  const result = await db.query(`DELETE FROM ticket WHERE id=${id}`);
  if (result.affectedRows) {
    return {
      status: 201,
      mess: "xóa ticket thành công",
    };
  } else {
    return {
      status: 400,
      mess: "Error in error ticket",
    };
  }
}

module.exports = {
  getAll,
  create,
  update,
  remove,
};
