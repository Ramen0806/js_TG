const person = {
    eat: function () {
        console.log('eat');
    },
    sleep: function () {
        console.log('sleep');
    },
    run: function () {
        console.log('run')
    }
}

const singer = {
    sing: function  () {
        console.log('sing')
    },
    __proto__: person
}

const programmer = {
    code:function(){
        console.log('code')
    },
    __proto__:person
}

console.log(singer.__proto__.__proto__)

