const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getAll(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, username, name, date_ob, phone, mail, created_date, role_name
    FROM users 
    LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(user) {
  const result = await db.query(
    `INSERT INTO users 
    (username, password, name, date_ob, phone, mail, role_name) 
    VALUES 
    ('${user.username}', '${user.password}', '${user.name}', '${user.date_ob}', '${user.phone}', '${user.mail}', '${user.role_name}')`
  );

  let message = "Error in creating user";

  if (result.affectedRows) {
    message = "user created successfully";
  }

  return { message };
}

async function update(id, user) {
  const result = await db.query(
    `UPDATE users 
    SET username="${user.username}", name="${user.name}", date_ob="${user.date_ob}", 
    phone="${user.phone}", mail="${user.mail}"
    WHERE id=${id}`
  );

  let message = "Error in updating user";

  if (result.affectedRows) {
    message = "user updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM users WHERE id=${id}`);

  let message = "Error in deleting user";

  if (result.affectedRows) {
    message = "user deleted successfully";
  }

  return { message };
}

module.exports = {
  getAll,
  create,
  update,
  remove,
};
