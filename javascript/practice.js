// function reverseWords(string){
//     return string.split('').map(function(word){
//         return
//         word.split(").reverse().join(");
    
//     }).join('');
// }
//     console.log(reverseWords('hi how are you'));




// emptying an array qn 2

// var arrayList=['a','b','c','d','e','f']; 
//  while(arrayList.length>0){
//     arrayList.pop();
//  }
// console.log(arrayList);

//enqueue and dequeue qn3

// const num=["one", "two", "three"];
// num.push("four");
// console.log(num);

// const year=["hundred", "twohundred"];
// year.pop();
// console.log(year);

//qn 4

//  for(var i=0; i<=100; i++){
//     if( i%3==0 && i%5==0){
//         console.log(i,"fizzbuzz")
//     }
//     else if(i%3==0){
//         console.log(i,"fizz")
//     }
//     else if(i%5==0 ){
//         console.log(i,"buzz")
//     }
//  }

//qn 5

function anagram (y,z){
    var a =y.split(" ").sort().join(" ");
    var b = z.split(" ").sort().join(" ");
    console.log(a===b ? true :false);
}