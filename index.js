const express = require('express');
require('dotenv').config();
const app = express();
const userRouter = require('./api/users/user.router');

app.use(express.json());

app.use('/api/', userRouter);

const PORT = process.env.APP_PORT || 3000; // Default to port 3000 if APP_PORT is not defined

app.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting the server:', error.message);
    } else {
        console.log(`Server is up and running on port ${PORT}`);
    }
});
