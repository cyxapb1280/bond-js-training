var user = {
  firstName: "Вася",
  sayHi: () => {
    alert( this.firstName );
  }
};


// 1. sending function without context
setTimeout(user.sayHi, 5000);

setTimeout(function() {
  alert( undefined.firstName );
}, 5000)

// 2. calling function and sending its result
setTimeout(user.sayHi(), 3000);

setTimeout(undefined, 3000;

// 3. sending function with context
setTimeout(user.sayHi.bind(user), 5000);


