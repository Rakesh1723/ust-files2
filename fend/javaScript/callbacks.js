// function greeet(name){
//     console.log("Good Morning "+name);
// }

// function display(name,callback){
//     callback(name)
// }
// display('Ram',greeet)
// console.log('bye')

//asyn commn using call back
function greeet(name){
    console.log("Good Morning ");
}

//setTimeout(greeet,5000)   // fun nas arg
//setTimeout(greeet('sabc'),5000)   // calling fun throw error to avoid use arrow fun
setTimeout(()=>greeet('Ram'),5000) 
console.log('Have a nice day')  
