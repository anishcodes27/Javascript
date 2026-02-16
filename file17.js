const products =["product1","product2","product3"]
// for(let i=0;i<products.length;i++){
//     console.log(products[i]);
// }

// products.forEach(()=>{})
products.forEach((product)=>{
    console.log(product)
})

// function controller(f){
//     console.log(f)
// }
// controller(10);

// controller(()=>console.log("Hello World"));

// let a=10
// let name="James"
// const f1=()=>console.log("Hello Wrold")

function greet(){
    console.log("Hello World")
}
const f1=()=>greet();
f1()


