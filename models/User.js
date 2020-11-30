const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim: true, //빈칸이 있을 때 없애준다.
        unique:1 //이메일을 중복없이 만들게 한다.
    },
    password: {
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{ //사용자(0)와 관리자(1)로 나누어서 권한설정
        type:Number,
        default:0
    },
    image:String,
    token:{ //유효성 관리
        type:String
    },
    tokenExp:{ //유효기간 설정
        type:Number
    }
})

const User = mongoose.model('User',userSchema) //모델은 스키마를 감싸준다.

module.exports={User}