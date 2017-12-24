/**
 * Created by LZX on 2017/12/24.
 */
var fs=require('fs');
var zlib=require('zlib');
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input2.txt'));
console.log("解压文件完成");