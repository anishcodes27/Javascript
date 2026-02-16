
const products=[
    {_id:1,name:"Product1",discription:"This is description",price:45000,category:"Laptop"},
    {_id:2,name:"Product2",discription:"This is description",price:70000,category:"Desktop"},
    {_id:3,name:"Product3",discription:"This is description",price:7000,category:"Electronics"},

];

const cart =products.map((product)=>{
    
    const obj={
        ...product,
        quantity:1,
    };
    return obj
    

});

console.log(cart)

