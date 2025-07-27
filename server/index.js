import path from 'node:path';
import url from 'node:url';

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config({ path: '../.env', quiet: true });

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
let db = null;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app
  .use(express.json())
  .use(cookieParser())
  .use(helmet())
  .use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 50,
      message: {
        status: 'error',
        message: ":: Server's request limit exceeded, try again in 15 mins.",
      },
    })
  )
  .use(
    cors({
      origin: 'http://localhost:5173', // frontend origin
      // credentials: true                // if using cookies/auth headers
    })
  )
  .use(express.static(path.resolve(__dirname, '../client', 'dist')));

app.post('/api/v1', (req, res) => {
  const { name } = req.body;

  res
    .status(200)
    .send({ status: 'success', data: `Hello and welcome back, ${name}!` });
});

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
// });

// app.use('*', globalNotFoundHandler).use(globalErrorHandler);

app.listen(PORT, async () => {
  try {
    db = await mongoose.connect('mongodb://localhost:27017/shoppr');
    console.log(':: Successfully connected to mongodb!');
    console.log(`:: Server running on port ${PORT}... 🚀`);
  } catch (e) {
    if (db) await db.disconnect();
    console.error(':: There was an error while trying to connect to database!');
  }
});
