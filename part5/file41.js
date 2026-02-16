function makePayment(f){
return new Promise((resolve,reject) => {

setTimeout(()=>{
    console.log("Payment has been made successfulyl");
    resolve();
},5000);

});
}

function sendConfirmation(){
    console.log("Order has been placed successfully")
}
makePayment(sendConfirmation)

//callback hell
//makePayment(sendConfirmation)
makePayment()
.then(()=>sendConfirmation())
.catch((err)=>console.log(err));