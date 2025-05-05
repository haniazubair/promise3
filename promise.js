function login() {
    return new Promise((resolve)=>{
        console.log("login");
        resolve()
    });
}
 
 function fetchdata() {
    return new Promise((resolve)=>{
        console.log("fetchdata");
        resolve()
    });
}
 
 function processdata() {
    return new Promise((resolve)=>{
        console.log("processdata");
        resolve()
    });
}
 
 function displaydata() {
    return new Promise((resolve)=>{
        console.log("displaydata");
        resolve()
    });
     
}
  displaydata()
  .then(()=>login())
  .then(()=>fetchdata())
  .then(()=>processdata())

