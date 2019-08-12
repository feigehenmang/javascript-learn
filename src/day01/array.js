let arr1 = new Array(10)
let arr2 = new Array(10, 20)

console.log(arr1) //[ <10 empty items> ]
console.log(arr2) // [ 10, 20 ]
let arr = [1, 2, 3] // 使用字面量创建数组

arr.length = 0
console.log(arr) // []

arr.length = 100
console.log(arr) // [ <100 empty items> ] 创建的都是空单元的稀疏数组，不推荐直接使用



let arr = [{
    a: 1
}, 123, () => {}, undefined]
console.log(arr.toString()) 
// "[object Object],123,()=>{}," 最后以逗号结尾，因为 undefined 变成空字符串了

let obj = {}
obj[arr] = ""
console.log(obj) 
// { '[object Object],123,()=>{},': "" } 当对象的属性是一个对象，JS 会将其转为字符串再作为其属性，这里就发生了隐式转换
