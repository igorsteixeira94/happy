import { createConnection } from 'typeorm';
import { resolve } from 'path';

createConnection({
  type: 'mongodb',
  url: process.env.MONGO_URL,
  useUnifiedTopology: true,
  database: 'happy',
  entities: [resolve(__dirname, '../', 'models', '*.ts')],
});
