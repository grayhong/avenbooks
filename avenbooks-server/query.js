import mysql from 'mysql';
import { sql_config } from './config';

const connection = mysql.createPool(sql_config);

const query = (sql, has_return = false) => {
  return new Promise ((resolve, reject) => {
    connection.getConnection((err, con) => {
      if (err) throw err;
      console.log("Connected!");
      con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log("Success!");
        console.log(result);
        if (has_return) resolve(result);
        resolve();
      });
      con.release();
    });
  });
};

export default query;