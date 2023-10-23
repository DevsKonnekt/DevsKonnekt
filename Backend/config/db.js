// config/db.js
import { connect, connection } from 'mongoose';

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});
