// function response(user){
//     console.log(user.name)
//     console.log(user.email)
// }

//using destructuring 

function response({name,email}){
    console.log(name)
    console.log(email)
}

const user={
    name:"John",
    email:"John@email.com",
    role:"user",

};

response(user)