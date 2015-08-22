/**
 * New node file
 */
function execute(someFunction, value) {
  someFunction(value);
}

//execute(function(word){ console.log(word) }, "Hello");

/**
 익명 함수 예제
 

*/

module.exports.ex = execute;
console.log("execute 로딩 됨");