require('dotenv').config();

const mongoose = require('mongoose');
const app = require('express')();
const dbURL = process.env.DB_URL;

// connect database
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to Database');
    })
    .catch(() => {
        console.log('Database not Connected')
    })

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})