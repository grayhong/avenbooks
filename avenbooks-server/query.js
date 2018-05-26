import mysql from 'mysql';
import sql_config from './config';


const con = mysql.createConnection(sql_config);

export const query = (sql) => {
  con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Success!");
    });
  });
}

