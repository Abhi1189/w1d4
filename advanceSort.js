var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "alex",     age: 10 },
  { id: 6, name: "alex",     age: 60 },
  { id: 7, name: "alex",     age: 40 },
];

students.sort(function(a, b){
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if(nameA < nameB){
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA === nameB) {
    return b.age - a.age;
  }
});
console.log(students);










// Sorting the array with numbers exercise......
// var array = [5, 2, 1, 3, 4];
// array.sort(function(a, b){
//   return(a - b);
// });
// console.log(array);