require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const AllRouter = require('./routes/route');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 5001;

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(process.env.DB_URL)
.then(() => console.log('Database Connected.'))
.catch((err) => console.log(err));

app.use(AllRouter);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})