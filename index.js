import express from 'express';
import ConnectDB from './Config/db.js';
import dotenv from 'dotenv';
import chalk from 'chalk';
import router from './Routes/AuthRoutes.js';


dotenv.config();
const app = express();
app.use(express.json());
ConnectDB();

app.use('/api/auth', router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(chalk.bgBlueBright.black.bold(`Server is running on http://localhost:${PORT}`));
});