

    function commonElements$(array1, array2) {
        let commonElements$ = [];
        for (let element of array1) {
          if (array2.includes(element)) {
            commonElements$.push(element);
          }
        }
        return commonElements$;
      }
      
 

console.log(commonElements$([10, 20, 30, 50, 70], [20, 50, 70]));
console.log(commonElements$([ 30, 50, 70 ], [ 20, 100, 300 ]));
console.log(commonElements$([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]));