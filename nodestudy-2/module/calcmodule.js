/**
 * Created by Administrator on 2015-06-07.
 */
/*모듈 만들기 예제*/
console.log("모듈 초기화 중");
var calcFunc = {
    "add" : function(a,b){
        return a + b;
    }
    ,"minus" : function(a,b){
        return a - b;
    }
    ,"multiple" : function(a,b){
        return a * b;
    }
    ,"div" : function(a,b){
        return a / b;
    }
}

module.exports = calcFunc;

console.log("모듈 초기화 됨")