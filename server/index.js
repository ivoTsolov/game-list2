import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import getRoutes from './routes/games.js'; 


const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/games', getRoutes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})