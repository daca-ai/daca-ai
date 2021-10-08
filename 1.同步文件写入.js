var fs = require("fs");
//console.log(fs);
//同步文件写入
//打开文件
var fd = fs.openSync("hello.txt","w");
//像文件中写入信息
fs.writeSync(fd , "今天是10月8号");
//关闭文件
fs.closeSync(fd);

