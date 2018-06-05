/* global process:false */
import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import addRoutes from './routes';
import path from 'path'

/* Environment variable settings. */
config();

const PORT = process.env.PORT || 8000;
const app = express();

// const staticPath = path.posix.join(config.assetsPublicPath, config.assetsSubDirectory);

const staticPath = path.posix.join(__dirname, 'statics');
console.log(staticPath);

/* Middleware settings. */
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(staticPath, express.static('./statics'));


/* Routes settings. */
addRoutes(app);

/* Start listening to given port. */
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
