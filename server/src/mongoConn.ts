import mongoose from 'mongoose';
require('dotenv').config();

const mongoConn = () => {
    // Local MongoDB connection URL
		const url = 'mongodb://localhost:27017/Movie-App';
    
    mongoose.connect(url, {});

    const db = mongoose.connection;
    db.once('open', () => {
        console.log('Database connected');
    });
    db.on('error', (err) => {
        console.error('connection error', err);
    });
};

export default mongoConn;