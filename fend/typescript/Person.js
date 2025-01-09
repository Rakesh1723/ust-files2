var Person = /** @class */ (function () {
    //   private  name:string;
    //   private  email:string;
    //   private   age:number;
    //   constructor(name,email,age)   //ts doesnot support overloading but we can use optional for overloading
    //   {  this.name=name;
    //     this.age=age;
    //     this.email=email;
    //   }
    function Person(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    } // it creates fields and const with this same as record
    return Person;
}());
// let p:Person=new Person("ram","ram@gmail.com",24);
// // console.log(p);
// p.print();
var p = {
    name: 'javed',
    email: "javed@gmail.com",
    age: 27
};
console.log(p);
