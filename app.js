const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

dotenv.config();
app.use(bodyParser.json());

mongoose.connect(process.env.mongoUrl).then(() => {
    console.log('Database connection successfully!');
}).catch((error)=>{
    console.log(error);
});

const appRoute = require('./src/route/appRoute'); 
app.use('/', appRoute); 


const PORT = process.env.PORT || 4005;

app.listen(PORT, () => {
 console.log(`Server running on ${PORT} port!`);
});