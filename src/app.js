require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const uploadRoute = require('./routes/uploadRoute');
const balanceRoute = require('./routes/balanceRoute');

const app = express();

connectDB();

app.use(express.json());

app.use('/upload', uploadRoute);
app.use('/balance', balanceRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));