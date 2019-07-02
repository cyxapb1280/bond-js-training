class Something {
  #property;

  constructor(){
    this.#property = "test";
  }
}

const instance = new Something();
console.log(instance.property); //=> undefined
