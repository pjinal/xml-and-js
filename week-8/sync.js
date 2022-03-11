/** 
 * function inc(a) {
 * return a + 1;
} */

const timeout = (ms = 3000) =>
  new Promise((resolve) => setTimeout(resolve, ms));
  

 const inc = (a) => {
  return new Promise((resolve) => timeout().then(() => resolve(a + 1)));
};

/**
 * const sum = function (a, b) {
  return a + b;
};
 */
const sum =  (a, b) => {
  return new Promise((resolve) => timeout().then(() => resolve(a+b)));
};


/*const max = (a, b) => (a > b ? a : b); 
*/

const max = async (a, b) => {
  await timeout();
  return a > b ? a : b;
};


const avg = async (a, b) => {
 return  new Promise ((resolve) => timeout().then(() => sum(a,b)).then((s) => resolve(s/2)))
  /*await timeout();
  const s = await sum(a, b);
  return s / 2;*/
}; 


const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return this.name.split(sep);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Person(name);
  }

  split(sep = " ") {
    return this.name.split(sep);
  }
}

const person = Person.of("Marcus Aurelius");

inc(5).then((x) => console.log(x));
sum(6,3).then((su) =>console.log(su));
max(8,6).then((m) => console.log(m));
avg (6,3).then((a) => console.log(a));
console.log("obj.split() =", obj.split());
console.log("person.split() =", person.split());
