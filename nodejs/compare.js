/**
 * Created by LZX on 2017/12/24.
 */
var buf1=new Buffer('hello');
var buf2=new Buffer('hello');
var result=buf1.compare(buf2);
if(result==0){
    console.log('相同');
}
else{
    console.log('不相同');
}