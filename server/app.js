require('dotenv').config();

const mongoose = require('mongoose');
const app = require('express')();
const dbURL = process.env.REACT_APP_DB_URL;

mongoose.connect(dbURL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('Conneted to Database')
    })
    .catch((e) => {
        console.log('Database not connected')
        console.log(e);
    })



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})