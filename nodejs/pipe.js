/**
 * Created by LZX on 2017/12/24.
 */
var fs=require('fs');
var readerStream=fs.createReadStream('input.txt');
var writerStream=fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);