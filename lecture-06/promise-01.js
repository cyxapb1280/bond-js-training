let isMomHappy = false;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
      const phone = {
        brand: 'Samsung',
        color: 'black'
      }

      resolve(phone) // fulfilled
    } else {
      const reason = new Error('mom is not happy')
      reject(reason)
    }

  }
);
