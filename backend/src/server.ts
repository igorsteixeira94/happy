import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorMiddleware from './middlewares/errors';
import routes from './routes';

import './database/connection';

const app = express();

app.use(cors());

app.use(routes);
app.use(errorMiddleware);

app.listen(3333);
