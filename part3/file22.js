import {products} from "./data.js"



const cart=[]
function addToCart(productId){
    const product=products.find(product => product._id===productId);
    
        cart.push({...product,quantity:1});
}



function increment(productId){
    const product=cart.find(product =>product._id===productId);
        product.quantity+=1;

    
}

function decrement(productId){
    const product=cart.find(product =>product._id===productId);
        product.quantity-=1;

     
}

function allOrder(){
    cart.forEach(product => {
        console.log(
            `${product._id} Product Name ${product.name} Quantity ${product.quantity} Total Price ${product.price*product.quantity}`
        )
    })
}





function placeOrder(){
    if(cart.length==0){
        console.log("Cart is empty");
        return;
    }


    let totalAmount =0;
    cart.forEach(item =>{
        totalAmount += item.price *item.quantity;
    });
    console.log("Order Summary");
    console.log(cart);
    console.log("total amount "+ totalAmount);
}





addToCart(1)
addToCart(3)
addToCart(5)
// console.log(cart)
increment(1)
increment(5)
// console.log(cart)
// console.log(cart)

allOrder()
// placeOrder()





