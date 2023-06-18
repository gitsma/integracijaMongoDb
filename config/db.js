const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASWD}@integracija.np5y5jn.mongodb.net/`);
        console.log('Connect to MongoDB', conn.connection.host)
    } catch (error) {
        console.log('Could not connect to MongoDB', err)
    }
}

module.exports = connectDB;