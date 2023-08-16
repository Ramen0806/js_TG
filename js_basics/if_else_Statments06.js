
/*
0-Today is sunday
1- Today is Monday
2- Today is Tuesday

Any number less than zero or more than 6 -> this number doesnt represent any day of the week
*/


let day$ = 2;

if (day$ === 0) console.log(" Today is Sunday");
if (day$ === 1) console.log(" Today is Monday");
if (day$ === 2) console.log(" Today is Tuesday");
if (day$ === 3) console.log(" Today is Wednesday");
if (day$ === 4) console.log(" Today is Thursday");
if (day$ === 5) console.log(" Today is Friday");
if (day$ === 6) console.log("Today is Saturday");
else console.error("Invalid day");



//Switch statement


switch (day$) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default: // considered as else!
        console.error("NO, This is a Date ERROR!");
}

/*
0 or 6 -> WEEKEND
1,2,3,4,5 -> WEEKDAY
*/


let day2 = 7;
switch (day2) {
case 0:
    console.log(" WEEKEND");
    break;
case 1:
    console.log("WEEKDAY");
    break;
case 2:
    console.log("WEEKDAY");
    break;
case 3:
    console.log("WEEKDAY");
    break;
case 4:
    console.log("WEEKDAY");
    break;
case 5:
    console.log("WEEKDAY");
    break;
case 6:
    console.log("WEEKEND");
    break;
default: // considered as else!
    console.error("NO, This is a Date ERROR!");
}






let day3 = 7;
switch (day3) {
case 0:
case 6:
    console.log(" WEEKEND");
    break;
case 1:
case 2:
case 3:
case 4:
case 5:
    console.log("WEEKDAY");
    break;

default: // considered as else!
    console.error("NO, This is a Date ERROR!");
}

//Best Practices 

if(day2 === 0 || day2 === 6) console.log("WEEKEND");
else if(day > 0 && day < 6) console.log("WEEKDAY");
else console.error("This is an invalid day");


switch(true){
    case day2 === 0 || day2 ===6:
        console.log("WEEKEND");
        break;
    case day2 > 0 && day2 < 6:
        console.log("WEEKDAY");
        break;
    default:
        console.error("This number does not represent any day of the week");
}




console.log(new Date().getDay());
console.log(new Date().getMonth());
console.log(new Date().getFullYear());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());

