require('dotenv').config()
const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(()=> console.log('MongoDB Connected...')).catch(err=>console.log(err)) 



app.get('/', (req,res)=>res.send('Hello World!'))

app.listen(port,()=> console.log(`테스트 서버 구동중... 포트번호 : ${port}`))