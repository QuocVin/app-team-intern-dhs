const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const bcrypt = require("bcrypt");

const jwtVariable = require("../variables/jwt");
const { SALT_ROUNDS } = require("../variables/auth");
const authMethod = require("./token-serv");

async function getAll(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, username, name, date_ob, phone, mail, created_date, role_name
    FROM users 
    LIMIT ${offset},${config.listPerPage}`
  );

  return {
    status: 200,
    data: rows,
    length: rows.length,
    page: page,
  };
}

async function createUser(user) {
  const hashPassword = bcrypt.hashSync(user.password, SALT_ROUNDS);
  const newPass = hashPassword;
  const result = await db.query(
    `INSERT INTO users 
    (username, password, name, date_ob, phone, mail, role_name) 
    VALUES 
    ('${user.username}', '${newPass}', '${user.name}', '${user.date_ob}', '${user.phone}', '${user.mail}', '${user.role_name}')`
  );
  delete user.password;

  if (result.affectedRows) {
    return {
      status: 201,
      mess: "tạo mới user thành công",
      data: user,
    };
  } else {
    return {
      status: 400,
      mess: "Error in creating user",
    };
  }
}

async function updateUser(id, user) {
  const result = await db.query(
    `UPDATE users 
    SET username="${user.username}", name="${user.name}", date_ob="${user.date_ob}", 
    phone="${user.phone}", mail="${user.mail}"
    WHERE id=${id}`
  );

  if (result.affectedRows) {
    return {
      status: 201,
      mess: "cập nhật thành công",
      data: user,
    };
  } else {
    return {
      status: 400,
      mess: "Error in updating user",
    };
  }
}

async function deleteUser(id) {
  const result = await db.query(`DELETE FROM users WHERE id=${id}`);
  if (result.affectedRows) {
    return {
      status: 201,
      mess: "xóa user thành công",
    };
  } else {
    return {
      status: 400,
      mess: "Error in error user",
    };
  }
}

async function authentication(user) {
  const result = await db.query(
    `SELECT id, username, password, name, date_ob, phone, mail, created_date, role_name
    FROM users
    WHERE username = '${user.username}'`
  );

  const isPasswordValid = bcrypt.compareSync(user.password, result[0].password);

  if (result[0].password === user.password || isPasswordValid) {
    delete result[0].password;

    // xử lý token
    const accessTokenLife =
      process.env.ACCESS_TOKEN_LIFE || jwtVariable.accessTokenLife;
    const accessTokenSecret =
      process.env.ACCESS_TOKEN_SECRET || jwtVariable.accessTokenSecret;

    const dataForAccessToken = {
      username: result[0].username,
    };
    const accessToken = await authMethod.generateToken(
      dataForAccessToken,
      accessTokenSecret,
      accessTokenLife
    );

    if (!accessToken) {
      return {
        status: 400,
        mess: "Đăng nhập không thành công, vui lòng thử lại."
      };
    }

    return {
      status: 200,
      data: result[0],
      accessToken,
    };
  } else {
    return {
      status: 400,
      mess: "Mật khẩu không chính xác"
    };
  }
}

module.exports = {
  getAll,
  createUser,
  updateUser,
  deleteUser,
  authentication,
};
