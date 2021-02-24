const person = {
    name: "Mehmet Ahmet",
    age: 25,
    salary:3000
};

const langs = ["Python", "Java", "C++", "Php"];

const name = "Mehmet";

//for In

// for(let prop in person) {
//     console.log(prop,person[prop]);
// }

// for (let index in langs){
//     console.log(index,langs[index]);
// }

//String

// for (let index in name){
//     console.log(index,name[index]);
// }

// for (let value of person){
//     console.log(value);
// }

// for(let value of langs){
//     console.log(value);
// }

for (let character of name){
    console.log(character);
}