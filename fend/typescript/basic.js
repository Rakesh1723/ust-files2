// let username: string ="john";
// console.log(username);
//tuple
// let x:[string,number];
// x=["hello",10];
// x=["abc",10];
// x[0]="world";
// console.log(x);
//Enum
// enum Color {RED,GREEN,BLUE};
// let c:Color=Color.GREEN
// console.log(c); //1
// console.log(Color); //{ '0': 'RED', '1': 'GREEN', '2': 'BLUE', RED: 0, GREEN: 1, BLUE: 2 }
// //Any
// let value:number;
// value=10;
// //never
// function error(message: string): never{
//     throw new Error(message);
// }
// let value: string|number ="hello"; 
// let value2: number;
// console.log(value2); //undefined by default
function adding(x, y) {
    if (y === void 0) { y = 9; }
    return x + y;
}
console.log(adding(2));
