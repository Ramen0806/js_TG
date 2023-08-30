


const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: hobby1 = ['Soccer', 'Watching movies'],
    exam_scores: {
        midterm: 60,
        final: 90
    }
}

console.log(student);



/*
Print hobbies -> 
Print exam scores
print soccer
find and print average of exam scores
*/

console.log(student.hobbies);
console.log(student.exam_scores);

console.log(hobby1[0]);


let average = (student.exam_scores.midterm + student.exam_scores.final) / 2;
console.log(`The average of the exam scores is ${average}`);

const book = {
    name: 'Amok',
    author: {
        FirstName: 'Stefan',
        FLastName: 'Zweig'
    },
    genre: 'Novella'
}

console.log(book);


const books = [
    {
        name: 'Amok',
        author: {
            FirstName: 'Stefan',
            FLastName: 'Zweig'
        },
        genre: 'Novella'
    },

    {
        name: 'Signature in the cell',
        author: {
            firstName: 'Stephen',
            lastName: ' Meyer',
        },
        genre: 'NonFiction'

    },

    {
        name: 'Darwinism',
        author: {
            firstName: 'Stephen',
            lastName: ' Meyer',
        },
        genre: 'NonFiction'
    }


]

console.log(books.length);

console.log(books[1]);

console.log(books[2].author.lastName);




const book$ = [
    {
        name: 'Amok',
        authors: {
            first_name: 'Stefan',
            last_name: 'Zweig',
        },
        genre: "Novella"
    },
    {
        name: 'My Name is Red',
        authors: {
            first_name: 'Orhan',
            last_name: 'Pamuk',
        },
        genre: "Historical Novel"
    },
    {
        name: 1984,
        authors: {
            first_name: 'George',
            last_name: 'Orwell',
        },
        genre: 'Dystopian Literature'
    },
];

let count = 0;

for (const book of book$){
    if (book.authors.first_name.includes('a')) {
      count ++;
    }
}
console.log(`There are ${count} author/s that a in their names`);


















