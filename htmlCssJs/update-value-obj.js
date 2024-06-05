let cat= {
    name: 'sassy',
    age: '18',
    color: 'grey',
    likes: ['milk','meat'],
    birthday: {
        month:7,
        day:17,
        year:1995,
    }
}
console.log(cat);

let key = "name";
let value= "tommy";
cat[key]=value;
console.log(cat);