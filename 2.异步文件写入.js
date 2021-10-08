//异步文件写入
var fs = require("fs");
//打开文件
fs.open("hello2.txt","w",function(err,fd){
    if(!err){
        fs.write(fd , "异步写入的信息" , function(err){
            if(!err){
                console.log("异步写入成功");
            }
            fs.close(fd , function(err){
                if(!err){
                    console.log("关闭成功");
                }
            })
        })
    }else{
        console.log(err);
    }
})