/* global process:false */
import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
// import addRoutes from './routes';

/* Environment variable settings. */
config();

const PORT = process.env.PORT || 8000;
const app = express();

/* Connect to MySQL server. */
// const db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', () => {
//   console.log('Connected to mongod server');
// });
// mongoose.connect('mongodb://localhost/paperplane');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1q2w3e4r"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

/* Middleware settings. */
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes settings. */
// addRoutes(app);

/* Start listening to given port. */
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
