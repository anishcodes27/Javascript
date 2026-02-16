//Promises

//Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
// It allows you to write asynchronous code in a more synchronous and readable manner.


// function f1(){
//     console.log("This is F1 function")
// }

// function f2(){
//     console.log("This is F2 function")
// }

// f1()

// f2()

function makePayment(){
setTimeout(()=>{
    console.log("Payment has been made successfulyl");
},5000);
}

function sendConfirmation(){
    console.log("Order has been placed successfully")
}
makePayment()
sendConfirmation()

