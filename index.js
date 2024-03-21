const express = require('express');
const connectDB = require('./config/usersData');
const routes = require('./rute/rute');




const app = express();
const port = 4000;

connectDB();

app.use('/',routes )


app.listen(port,()=>{ 
    console.log(`listening at http://localhost:${port}`);
});
