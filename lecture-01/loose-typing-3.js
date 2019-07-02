String(123) // explicit
123 + ''          // implicit

String(123)                   // '123'
String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'

Boolean(2)          // explicit
if (2) { ... }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator

// returns number 123, instead of returning true
// 'hello' and 123 are still coerced to boolean internally to calculate the expression
let x = 'hello' && 123;   // x === 123

Boolean('')           // false
Boolean(0)            // false
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false

Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true

Number('123')   // explicit
+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit

Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123