import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connectDB from './config/db.js';
import categoryRouter from './routes/categoryRoute.js';
import resturantRouter from './routes/resturantRoute.js';
import userRouter from './routes/userRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/api/users',userRouter);
app.use('/api/v1/resturants',resturantRouter);
app.use('/api/v1/category',categoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});