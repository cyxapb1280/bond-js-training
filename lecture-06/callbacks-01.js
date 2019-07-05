const request = require(‘request’)

request('https://www.somepage.com',  (error, response, body) => {
  if(error){
    // Handle error.
  }
  else {
    // Successful, do something with the result.
  }
})

request('http://www.somepage.com', (firstError, firstResponse, firstBody) => {
  if(firstError){
    // Handle error.
  }
  else {
    request(`http://www.somepage.com/${firstBody.someValue}`, (secondError, secondResponse, secondBody) => {
      if(secondError){
        // Handle error.
      }
      else {
        // Use secondBody for something
      }
    })
  }
})
