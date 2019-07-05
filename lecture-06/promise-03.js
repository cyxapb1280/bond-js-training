buyCoffee()
  .then(function() {
    return drinkCoffee();
  })
  .then(function() {
    return doWork();
  })
  .then(function() {
    return getTired();
  })
  .then(function() {
    return goToSleep();
  })
  .then(function() {
    return wakeUp();
  });
