


//Regular object

let person = {
    name: 'Alex',
    age: 28
};

console.log(person); //{ name: 'Alex', age: 28 }
console.log(typeof person); //object
console.log(person.name); //'Alex'
console.log(person.age); //28

//logic to send this person object to the server

let formattedPerson = JSON.stringify(person); // from object to JSON format
console.log(formattedPerson); //{"name":"Alex","age":28}
console.log(typeof formattedPerson); //string
console.log(formattedPerson.name);
console.log(formattedPerson.age);


//convert JSON format to object

const data = '{"name":"Alex","age":28}';
const convertedData = JSON.parse(data); 

console.log(convertedData); //{ name: 'Alex', age: 28 }
console.log(typeof convertedData); //object
console.log(convertedData.name); //'Alex'
console.log(convertedData.age); //28


//JSON.stringify(object, fun)
let person2 = {
    name: 'Alex',
    age: 28
};

const OnlyNameJSON = JSON.stringify(person2, (key, value) => 
{console.log(key, value)
return value
})

const OnlyNameJSON2 = JSON.stringify(person2, (key, value) => 
{console.log("key", key);
    if(key === "age" && value < 30){
        return undefined; //
    }
return value
})

