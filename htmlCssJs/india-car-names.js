let myarray = [
    { name: "Chevrolet", country: "America" },
    { name: "Maruti Suzuki", country: "India" },
    { name: "Audi", country: "Germany" },
    { name: "Tata", country: "India" },
  ];
  
  function getIndia(a) {
    for (let k of a) {
      if (k.country == "India") console.log(k.name);
    }
  }
  
  getIndia(myarray);