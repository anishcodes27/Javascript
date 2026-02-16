// const products=["product1","product2","product3"];

const products=[
    {_id:1,name:"Product1",discription:"This is description",price:45000,category:"Laptop"},
    {_id:2,name:"Product2",discription:"This is description",price:70000,category:"Desktop"},
    {_id:3,name:"Product3",discription:"This is description",price:7000,category:"Electronics"},

];
// const cart=[]
let cart=[]



// products.forEach((product)=>console.log(product));

products.forEach((product)=>{
    // product.quantity=1
    // product.total=product.price*product.quantity
    // cart.push(product)
    // cart=[...cart,product]
    const obj={
        ...product,
        quantity:1,
        total:product.price*product.quantity

    };
    cart=[...cart,product]

});

console.log(cart)

