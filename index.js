import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import { handleAddProblemToAppwrite, handleUserLogin } from './contollers/controllers.js';

const app = express();
const PORT = 8000;

const corsOptions = {
    origin: '*', 
    methods: 'GET, POST',
    allowedHeaders: '*',
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());


app.post("/addProblem", handleAddProblemToAppwrite);
app.post("/login", handleUserLogin);

app.listen(PORT, () => { console.log(`server started at port: ${PORT}`)});