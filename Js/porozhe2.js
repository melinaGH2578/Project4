
let users = [];
let isQuitEntered = true;
while (isQuitEntered != false) {
    const names = prompt("enter something");

    if (names === "quit") {
        isQuitEntered = false;
    }
    else {
        users.push(names);
    }

}
function allnames (arr) {
    let arrlength = arr.length;
  
    
    if (arrlength > 1) {
        let result= arr.join (" and ");
        console.log (result + " like this");
    }
    else {
        console.log (arr + " likes this");
    }

    
   
}




allnames(users);