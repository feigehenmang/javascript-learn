let obj = {} // 通过字面量表示法来创建对象，比 new 更加简便

obj.a = 1
obj["b"] = 2
obj["c d"] = 3 // 方括号可以支持点表示法不支持的语法

// 方括号也可以支持表达式
// ps：对象中含有数字的属性会被转为字符串
obj[1 + 2] = 4
obj[obj] = 5 // 如果属性是一个对象，会转为原始类型
console.log(obj) // {"3": 4, "a": 1, "b": 2, "c d": 3, "[object Object]": 5}
let str = "abc"
let wrappedStr = new Object("abc") // 等同于 new String("abc")

console.log(typeof str) // 'string'
console.log(typeof wrappedStr) // 'object'
console.log(wrappedStr instanceof String) // true 注意 String 首字母是大写，代表是 String 包装类型而非 string 基本类型
