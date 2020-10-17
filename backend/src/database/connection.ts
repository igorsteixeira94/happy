import { createConnection } from 'typeorm';

createConnection({
  type: 'mongodb',
  url: process.env.MONGO_URL,
  useUnifiedTopology: true,
  database: 'happy',
});
