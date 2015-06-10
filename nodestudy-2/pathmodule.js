/**
 * Created by Administrator on 2015-06-09.
 */
/*Path 모듈의 사용*/

//경로 추출
var path = require("path");
var str = "C:/Users/Administrator/Downloads/3DP_Chip_v1504.exe"
var dirname = path.dirname("c:/python27/python.exe");
//파일 위치 경로
console.log(dirname)
//파일명 추출 확장자 포함
console.log(path.basename(str));
//파일명 추출 확장자 미포함
console.log(path.basename(str,'.exe'));
//확장자 파악
console.log(path.extname(str));
