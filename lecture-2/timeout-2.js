var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
};

// what is actually happening

/* 1 */

setTimeout(function () {
  alert( undefined.firstName)
}, 5000)

/* 2 */

const functionResult = user.sayHi(); // since it called alert is happening
                                     // and as result - undefined
setTimeout(functionResult, 3000); // nothing will happen in 3s

/* 3 */

setTimeout(function () {
  alert( user.firstName) // thanks to bind
}, 5000)
