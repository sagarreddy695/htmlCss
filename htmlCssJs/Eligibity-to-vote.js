let myarray = [
    { name: "rahul", age: 25 },
    { name: "vinod", age: 18 },
    { name: "pavan", age: 15 },
    { name: "geetha", age: 11 },
  ];
  
  function getAge() {
    for (let k of myarray) {
      if (k.age >= 18) console.log(k.name);
    }
  }
  
  getAge();