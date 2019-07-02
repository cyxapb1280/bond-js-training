class Animal {
  constructor(name, sound) {
    this.name = name
    this.sound = sound
  }

  speak() {
    console.log(this.name + `${this.sound}`)
  }
}

let dog = new Animal('Sprinkles', 'barks')
dog.speak()

function Animal(name, sound){
  this.name = name;
  this.sound = sound;
}
Animal.prototype.speak = function(){
  console.log(this.name + ' ' + this.sound);
}
var dog = new Animal('Sprinkles', 'barks!');
dog.speak();
