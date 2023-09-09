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

const OnlyNameJSON3 = JSON.stringify({name: person2[1]})

console.log(OnlyNameJSON3)