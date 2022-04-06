const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getAll(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, price, image_path, status
    FROM product 
    LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(params) {
  const result = await db.query(
    `INSERT INTO product 
    (name, descripstion, price, image_path) 
    VALUES 
    ('${params.name}', '${params.descripstion}', '${params.price}', '${params.image_path}')`
  );

  if (result.affectedRows) {
    return {
      status: 201,
      mess: "tạo mới product thành công",
      data: params,
    };
  } else {
    return {
      status: 400,
      mess: "Error in creating product",
    };
  }
}

async function update(id, params) {
  const result = await db.query(
    `UPDATE product 
    SET name="${params.name}", descripstion="${params.descripstion}", 
    price="${params.price}", image_path="${params.image_path}", status="${params.status}"
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
      mess: "Error in updating product",
    };
  }
}

async function remove(id) {
  const result = await db.query(`DELETE FROM product WHERE id=${id}`);
  if (result.affectedRows) {
    return {
      status: 201,
      mess: "xóa product thành công",
    };
  } else {
    return {
      status: 400,
      mess: "Error in error product",
    };
  }
}

module.exports = {
  getAll,
  create,
  update,
  remove,
};
