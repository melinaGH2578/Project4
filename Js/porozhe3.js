const arrNumber1 = prompt("enter first number").split (",");
const arrNumber2 = prompt("enter secound number").split (",");




function newArr (num1 , num2) {
   let firstNum = [...num1];
    for (i = 0; i < num2.length; i++) {
       firstNum =  firstNum.filter ((item) => item !== num2[i])
        

        }
    let secoundNum = [...num2];    
    for (i = 0; i < num1.length; i++) {
        secoundNum = secoundNum.filter ((item) => item !== num1[i])
    }    
    const result = [...firstNum, ...secoundNum]
    console.log (result);
    }

    
newArr (arrNumber1 , arrNumber2);



