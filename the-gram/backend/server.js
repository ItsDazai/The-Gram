const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes= require('./routes/user');
const postRoutes= require('./routes/post');

const app= express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

const PORT= process.env.PORT ||5000;
app.listen(PORT ,() => console.log(`Server running on port ${PORT}`));
