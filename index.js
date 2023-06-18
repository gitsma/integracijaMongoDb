require('dotenv').config();
const connectDB = require('./config/db');
connectDB();
const express = require('express');
const app = express();
app.use(express.json());

const {
    createUser,
    getUsers,
    getUserByName,
    getUserById,
    changeUserById,
    removeUserById
} = require('./controllers/userController');

app.post('/api/user', createUser);
app.get('/api/users', getUsers);
app.get('/api/userbyname', getUserByName);
app.get('/api/user/:id', getUserById);
app.put('/api/user/:id', changeUserById);
app.delete('/api/user/:id', removeUserById);


app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT ${process.env.PORT}`)
});
