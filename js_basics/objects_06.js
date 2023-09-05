
const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

console.log(users.length); // 4
// count how many users are older than 30
//Find and store all the users that are younger 35 in an array

let count = 0;
let countCity = 0;
const young35 = [];

for (const user of users) {
    if (user.age > 30)  count++;
    if (user.address.city == 'Chicago') countCity++;
    if (user.age < 35 ) { young35.push(user.firstName)};
    sum += user.age;
}

console.log(count); //2
console.log(countCity); //2
console.log(young35);
console.log(sum);
console.log(sum / users.length);
 





