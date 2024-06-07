let mya = [
    {
      name: "printing press",
      invented: "johanes",
    },
    {
      name: "light bulb",
      invented: "edison",
    },
    {
      name: "telephone",
      invented: "bell",
    },
    {
      name: "aeroplane",
      invented: "wright",
    },
    {
      name: "computer",
      invented: "charles",
    },
  ];
  
  function getTask(a) {
    for (let k of mya) {
      console.log(k[a]);
    }
  }
  
  getTask("invented");