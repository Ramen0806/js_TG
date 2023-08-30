
function getMultipleOf5(x, y){

    let newX = Math.min(x,y)
    let newY = Math.max(x,y)

    const MultipleOf5 = [];

  for (let i = newX; i <= newY; i++) {
        if( i % 5 === 0) {
           MultipleOf5.push(i);
        }
    }
    if( x < y) return MultipleOf5;
    else return  MultipleOf5.reverse();
    
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));