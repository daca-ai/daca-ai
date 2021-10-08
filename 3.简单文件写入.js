var fs = require("fs");
//简单文件写入（异步）
fs.writeFile("hello3.txt","今天天气非常差",{flag:"a"},function(err){
    if(!err){
        console.log("文件写入成功");
    }else{
        console.log(err);
    }
})