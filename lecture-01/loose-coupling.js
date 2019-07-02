var user = { name: 'User' };
var john = { name: 'John', __proto__: user };
delete user.name;
console.log( john.name )






