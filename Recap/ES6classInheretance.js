class Person {
    eat() {
        console.log('eat');
    }
    sleep() {
        console.log('sleep')
    }
}

class Dancer {
    eat() {
        console.log('eat');
    }
    sleep() {
        console.log('sleep')
    }
    dance() {
        console.log('dance')
    }
}

class Tester extends Person {
    test() {
        console.log('Test')
    }
}