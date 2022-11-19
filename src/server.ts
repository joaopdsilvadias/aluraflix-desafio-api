import express from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';
import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.EXPRESS_PORT, () => {
    logger.sucess('Server is running on port ' + process.env.EXPRESS_PORT);
});