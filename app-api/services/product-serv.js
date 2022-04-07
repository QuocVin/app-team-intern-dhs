const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getAll(params) {
  const offset = helper.getOffset(params?.page || 1, config.listPerPage);
  let search = ''
  if (params?.from && params?.to) {
    search += ` AND (price BETWEEN ${params?.from} AND ${params?.to})`
  }
  if (params?.brand) {
    search += ` AND id_brand = ${params.brand}`
  }

  const rows = await db.query(
    `SELECT id, name, descripstion, price, image_path, status, quantity_stored, id_brand
    FROM product 
    WHERE name like '%${params?.name || ''}%' ${search}
    LIMIT ${offset},${config.listPerPage}`
  );

  return {
    status: 200,
    data: rows,
    length: rows.length,
    page: params?.page || 1,
  };
}

async function getById(params) {
  const rows = await db.query(
    `SELECT id, name, descripstion, price, image_path, status, quantity_stored, id_brand
    FROM product 
    WHERE id = ${params.id}`
  );

  return {
    status: 200,
    data: rows[0],
  };
}

async function create(params) {
  const result = await db.query(
    `INSERT INTO product 
    (name, descripstion, price, image_path, quantity_stored, id_brand) 
    VALUES 
    ('${params.name}', '${params.descripstion}', '${params.price}', '${params.image_path}', '${params.quantity_stored}', '${params.id_brand}')`
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
    SET name="${params.name}", descripstion="${params.descripstion}", price="${params.price}", 
    image_path="${params.image_path}", status="${params.status}", quantity_stored="${params.quantity_stored}"
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
  getById,
  create,
  update,
  remove,
};
