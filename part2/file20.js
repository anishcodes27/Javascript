const products=[
    {_id:1,name:"Product1",discription:"This is description",price:45000,category:"Laptop"},
    {_id:2,name:"Product2",discription:"This is description",price:70000,category:"Desktop"},
    {_id:3,name:"Product3",discription:"This is description",price:7000,category:"Electronics"},
    {_id:4,name:"Product4",discription:"This is description",price:5000,category:"Laptop"},
    {_id:5,name:"Product5",discription:"This is description",price:18000,category:"Desktop"},
    {_id:6,name:"Product6",discription:"This is description",price:20000,category:"Electronics"},

];

let search ="Laptop"

// const resultArray = products.map((product)=>{
//     const obj={
//         ...product
//     }
//     return obj;
// });

// const resultArray=products.map((product)=>product);

const resultArray=products.filter((product)=>product.category===search);


console.log(resultArray)
