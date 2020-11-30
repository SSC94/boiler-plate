const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:1234@cluster0.fovxu.mongodb.net/study?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(()=> console.log('MongoDB Connected...')).catch(err=>console.log(err)) 



app.get('/', (req,res)=>res.send('Hello World!'))

app.listen(port,()=> console.log(`테스트 서버 구동중... 포트번호 : ${port}`))