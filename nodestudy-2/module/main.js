/**
 * Created by Administrator on 2015-06-08.
 */
    /*모듈 사용 예제*/
var calc = require("./calcmodule");

var addVal = calc.add(1,5);
console.log("addVal : " + addVal);

var minusVal = calc.minus(addVal,3)
console.log("minusVal : " + minusVal);

var multiVal = calc.multiple(minusVal,3);
console.log("multiVal : " + multiVal);

var divVal = calc.div(multiVal,3)
console.log("divVal : " + divVal);