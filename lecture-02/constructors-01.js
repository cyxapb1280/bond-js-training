function Vehicle(model, speed) {
  // const this = {};

  this._model = model || 'default'
  this._speed = speed

  this.ride = function () {
    console.log(this._model + ' wroooms on ' + this._speed + ' km/h')
  }

  // return this;
}

const supercar = new Vehicle('Buzeratti', 300)
const van = new Vehicle('transporter', 100)
const scooter = new Vehicle('vespa', 80)

supercar.ride(); // => Buzeratti wroooms on 300 km/h
van.ride() // => transporter wroooms on 100 km/h
scooter.ride(); // => vespa wroooms on 80 km/h


