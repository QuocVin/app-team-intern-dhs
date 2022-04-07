const db = require("./db");

async function getAll() {
  const rows = await db.query(
    `SELECT id, name
    FROM brands`
  );

  return {
    status: 200,
    data: rows,
    length: rows.length,
  };
}

async function create(params) {
  const result = await db.query(
    `INSERT INTO brands 
    (name) 
    VALUES 
    ('${params.name}')`
  );

  if (result.affectedRows) {
    return {
      status: 201,
      mess: "tạo mới brands thành công",
      data: params,
    };
  } else {
    return {
      status: 400,
      mess: "Error in creating brands",
    };
  }
}

async function update(id, params) {
  const result = await db.query(
    `UPDATE brands 
    SET name="${params.name}"
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
      mess: "Error in updating brands",
    };
  }
}

async function remove(id) {
  const result = await db.query(`DELETE FROM brands WHERE id=${id}`);
  if (result.affectedRows) {
    return {
      status: 201,
      mess: "xóa brands thành công",
    };
  } else {
    return {
      status: 400,
      mess: "Error in error brands",
    };
  }
}

module.exports = {
  getAll,
  create,
  update,
  remove,
};
