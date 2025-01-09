// https://api.github.com/users/rakesh

//ajax --> asyn javascript xml.

// function fetchGitHub(username){
//      const url="https://api.github.com/users/";
//     //promise usage
//      fetch(url+username)
//          .then(r=>r.json().then(data=>console.log(data)))
//          .catch(error=>console.error(error))
//        // .then(response=>console.log(response))
       
// }


async function fetchGitHub(username){
         const url="https://api.github.com/users/";
         let response=await fetch(url+username);
         let data=await response.json();  
         console.log(data)
         return data;
           
    }

    module.exports = fetchGitHub;

