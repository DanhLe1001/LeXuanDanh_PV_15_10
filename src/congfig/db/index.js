const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/search');
        console.log('connection success');
    } catch (error) {
        console.log('connection fail');
    }
}

module.exports = { connect };
