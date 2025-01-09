console.log('Hello,world!');
/*
number
string
date
object
boolean
class
*/

// let username;
// var email;
// const address="hyd";

// let flag=true;
// let y;
// if(flag)
// {
//     y=0;
//     console.log(y);
// }
// console.log(y);

function add(x,y){
    return x+y;
}

let sum=add(10,20);
console.log(sum);


let s=function (x,y){
    return x+y;
}

let adder=(x,y)=>x+y;  // arrow function


let arr=[10,20,30]; // it is dynamic as arraylist 

arr.push(100);
arr.push(200);
arr.pop(); //it delete last item
arr.splice(1,1); 

console.log(arr);
 for(let i=0;i<arr;i++)
  console.log(arr[i]);

  for(let i of arr)
  {
      console.log(i);
  }

  arr.forEach(i=>console.log(i));

  arr.filter(i=>i%20 === 0) //strict compare

  let summer=arr.filter(i=>!(i%2000))
  .map(i=>i*2)
  .reduce((i,s)=>i+s,0)
 // .forEach(i=>console.log(i));
 console.log(summer+"hello");

 let today=new Date();
 console.log(today);

 // object creation
 let trainee1={
     name:'harsh',
     location:'trivandrum',
     print:function(){
       console.log(this.name);
       console.log(this)
     }
 }

 console.log(trainee1);
 console.log(trainee1.location);
 trainee1.location='chennai'
 trainee1.college='NITC'
 console.log(trainee1);
 trainee1.print()

  