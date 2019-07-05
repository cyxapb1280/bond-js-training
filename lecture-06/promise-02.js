// call our promise
var askMom = function () {
  willIGetNewPhone
    .then(function (fulfilled) {
      // yay, you got a new phone
      console.log(fulfilled);
      // output: { brand: 'Samsung', color: 'black' }
    })
    .catch(function (error) {
      // oops, mom don't buy it
      console.log(error.message);
      // output: 'mom is not happy'
    });
};

askMom();
