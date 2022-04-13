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

  const total = await db.query(
    `SELECT count(id) as sl
    FROM order_db`
  );

  return {
    status: 200,
    data: rows,
    length: rows.length,
    page: page,
    total: total[0].sl
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

async function getOrderByUser(id_user, page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, total_price, created_date, id_user
    FROM order_db
    WHERE id_user = ${id_user}
    LIMIT ${offset},${config.listPerPage}`
  );
  const total = await db.query(
    `SELECT count(id) as sl
    FROM order_db where id_user = ${id_user}`
  );

  if (rows.length) {
    return {
      status: 200,
      mess: "lấy thông tin người dùng thành công",
      data: rows,
      page: page,
      length: rows.length,
      total: total[0].sl,
      limit: config.listPerPage
    };
  } else {
    return {
      status: 400,
      mess: "Thông tin người dùng không chính xác",
    };
  }
}

// hóa đơn chi tiết
async function getOrderDetail(params, page = 1) {
  const order_db = await db.query(
    `SELECT *
    FROM order_db
    WHERE id = ${params.id_order}`
  );

  if (!order_db.length) {
    return {
      status: 400,
      mess: "không tìm thấy thông tin hóa đơn",
    };
  }

  const offset = helper.getOffset(page, config.listPerPage);
  const order_detail = await db.query(
    `SELECT *
    FROM order_detail
    WHERE id_order = ${params.id_order}
    LIMIT ${offset},${config.listPerPage}`
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
    WHERE p.id in (${arr_pro_id}) AND od.id_order = ${params.id_order}
    LIMIT ${offset},${config.listPerPage}`
  );
  order_db[0].list_product = product
  order_db[0].length = product.length

  const total = await db.query(
    `SELECT count(p.id) as sl
    FROM order_detail od
    INNER JOIN product p ON p.id = od.id_product
    INNER JOIN brands b ON b.id = p.id_brand
    WHERE p.id in (${arr_pro_id}) AND od.id_order = ${params.id_order}
    LIMIT ${offset},${config.listPerPage}`
  );

  return {
    status: 200,
    data: order_db[0],
    page: page,
    total: total[0].sl
  };
}


//  getYearTotal hanlder chon row bat ki -> total month
async function getTotalMonthGroupBrand(params) {
  const rows = await db.query(
    `SELECT sum((p.price * od.quantity)) as total, b.name
    FROM product p
    INNER JOIN brands b ON b.id = p.id_brand
    INNER JOIN order_detail od ON od.id_product = p.id
    INNER JOIN order_db o ON o.id = od.id_order
    WHERE MONTH(o.created_date) = ${params.month} AND YEAR(o.created_date) = ${params.year}
    GROUP BY b.name
    ORDER BY b.name ASC`
  );

  return {
    status: 200,
    data: rows,
  };
}

// thống kê thành bảng theo hóa đơn
async function getYearTotal(params) {
  const result = await db.query(
    `SELECT count(id) as sl, sum(total_price) as total, MONTH(od.created_date) as month, YEAR(od.created_date) as year
    FROM order_db od
    WHERE YEAR(od.created_date) = ${params.year}
    GROUP BY month
    ORDER BY month ASC`
  );

  return {
    status: 200,
    data: result,
  };
}

// thống kê tổng danh trong năm theo từng tháng
async function getChartYear(params) {
  const result = await db.query(
    `SELECT sum(total_price) as total, MONTH(od.created_date) as month
    FROM order_db od
    WHERE YEAR(od.created_date) = ${params.year}
    GROUP BY month
    ORDER BY month ASC`
  );

  return {
    status: 200,
    data: result,
  };
}

module.exports = {
  getAll,
  create,
  update,
  remove,
  getOrderByUser,
  getOrderDetail,
  getTotalMonthGroupBrand,
  getYearTotal,
  getChartYear,
};
