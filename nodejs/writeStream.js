/**
 * Created by LZX on 2017/12/24.
 */
var fs=require('fs');
var data='heelo world';
var writeStream=fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');
writeStream.on('finish',function () {
    console.log('写入完成');
})
writeStream.on('error',function (err) {
    console.log(err.stack);
})
writeStream.end();
console.log('程序执行完毕');