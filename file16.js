let cart=[]
//click on add to cart button to iphone product
cart=[...cart,{name:"iphone",price:45000,qty:1}]
//click on add to cart button to speaker product
cart=[...cart,{name:"speaker",price:1000,qty:1}]
console.log(cart);

const order={
    email:"john@gmail.com",
    items:cart,
    orderValue:46000,
    status:"pemding"
}

db.orders.insertOne(order)

//create flipkart databse
//create collection orders > email,items,orderValue,status,orderDate
//create collection users > name,email,password,role
//insert seed data
//write aggregate query to display all the orders placed by a partiular user