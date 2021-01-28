const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT|| 5000;

app.use(cors());
app.use(express.json());

const uri =`mongodb+srv://mohit:mohit@cluster0.cemeh.mongodb.net/<dbname>?retryWrites=true&w=majority` ;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("mongoDB database established successfully");
})

const registerRouter = require('./routes/register');

app.use('/register', registerRouter)

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
})