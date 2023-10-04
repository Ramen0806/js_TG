
const findUniques = (arr1, arr2) => {
  const a = arr1.filter((value, index) => arr1.indexOf(value) === index)
  const b = arr2.filter((value, index) => arr2.indexOf(value) === index)
  const unique = a.concat(b);
  const uniqueList = [];
  for(const el of unique){
      if(!a.includes(el) || !b.includes(el)) uniqueList.push(el)
  }
  return uniqueList;

}
  console.log(findUniques([], [1, 2, 3, 2]));
  console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
  console.log(findUniques([], [1, 2, 3, 2]));
  console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
  console.log(findUniques([8, 9], [9, 8, 9]));
  console.log(findUniques([-1, -2], [1, 2]));