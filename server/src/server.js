require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/auth.routes')
const blogRoutes = require('./routes/blog.routes')
const { notFound, errorHandler } = require('./middlewares/error.middleware');

const app = express()
const PORT = process.env.PORT || 5050

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.use('/api/auth', authRoutes)
app.use('/api/blog', blogRoutes)


//404
app.use(notFound)

// Error Handler
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to database', error);
    process.exit(1);
  }
};

startServer();
