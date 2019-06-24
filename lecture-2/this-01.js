const alien = {
  name: 'Alien Alinson',

  communicate: function () {
    console.log('Hello human, my name is ' + this.name)
  }
}

const alienFromOtherPlanet = {
  name: 'Tilda Swinton'
}

alienFromOtherPlanet.communicate = alien.communicate;

alien.communicate() // => Hello human, my name is Alien Alinson
alienFromOtherPlanet.communicate() // Hello human, my name is Tilda Swinton
