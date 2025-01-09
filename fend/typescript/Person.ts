export class Person{  // export allows to access from outside as pack(modules)
//   private  name:string;
//   private  email:string;
//   private   age:number;

//   constructor(name,email,age)   //ts doesnot support overloading but we can use optional for overloading but overriding is allowed
//   {  this.name=name;
//     this.age=age;
//     this.email=email;
//   }

 constructor(public name:string,public email:string,public age:number){}   // it creates fields and const with this same as record
//   print():void{
//       console.log(this);
//   }  //function,var,let,arrow keyword inside class is invalid
}

// let p:Person=new Person("ram","ram@gmail.com",24);
// // console.log(p);
// p.print();

// let p:Person={
//     name:'javed',
//     email:"javed@gmail.com",
//     age:27
// }
// console.log(p);

// export default Person; 