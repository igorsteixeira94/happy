import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/errors';
import routes from './routes';

const app = express();

app.use(routes);
app.use(errorMiddleware);

app.listen(3333, () => {
  console.log('Running http://localhost:3333');
});
