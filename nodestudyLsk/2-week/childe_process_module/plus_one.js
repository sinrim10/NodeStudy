/**
 * Created by Administrator on 2015-06-12.
 */
//자식프로세스로의 데이터 전송
process.stdin.resume();
process.stdin.on('data',function(data){
    var number;
    try{
        number = parseInt(data.toString(),10);

        number +=1;
        process.stdout.write(number+'\n');
    }catch(err){
        process.stderr.write(err.message+"\n");
    }
});