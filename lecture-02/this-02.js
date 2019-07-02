const alien = {
  name: 'Alien Alinson',

  communicate: function () {
    console.log('Hello human, my name is ' + this.name)
  }
}

const communicate = alien.communicate;

communicate.call(alien)

setTimeout(alien.communicate.bind(alien), 2000);

setTimeout(function () {
  alien.communicate()
}, 3000)