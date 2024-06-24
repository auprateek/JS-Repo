const ob1 = { 
    name :  "Prateek",
    age : 30,
    "add" : "Prayagraj"
}

console.log(ob1.name);
console.log(ob1["name"]);
console.log(ob1["add"]);
console.log(ob1.add);
const arrayLikeObj1 = { 10: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

const obj = {
    prop: 42,
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // Expected output: 42


  const ob = { 
    name : "Prateek",
    age :29,
    cource : "MCA"
  }
console.log(Object.values(ob));
const {name : N} = ob  // object destructure
console.log(N);