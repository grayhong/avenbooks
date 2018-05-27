import mysql from 'mysql';
import sql_config from './config';

const connection = mysql.createPool(sql_config);

// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1q2w3e4r"
// });

// export const query = (sql) => {

//   con.connect((err) => {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Success!");
//     });
//   });
// }

export const query = (sql, has_return) => {
  connection.getConnection((err, con) => {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      console.log("Success!");
      if (has_return) return result;
      return;
    });
    con.release();
  });
};
