/* static methods */

class Animal{
  constructor(name, sound){
    this.name = name;
    this.sound = sound;
  }
  speak(){
    console.log(this.name + this.sound);
  }
  static allSpeak(animals){
    for(animal of animals){
      console.log(animal.name + animal.sound);
    }
  }
}

Animal.allSpeak(animal1, animal2, animal3);
