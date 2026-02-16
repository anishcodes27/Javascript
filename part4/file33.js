const student ={
    name:"John",
    age:21,
    // city:"Jalandhar"
    marks:{
        maths:60,
        physics:70
    }
}


//destructuring
// names=["John","Cathy","Mike"]
// const [name1,name2]=names
// console.log(name1)
// console.log(name2)


// const {name,age}=student
// console.log(name)
// console.log(age)


// const {name}=student
// console.log(name)
// console.log(age)


// const {name:userName}=student
// console.log(userName)

// const{city="Amritsar"}=student
// console.log(city)

const{marks}=student
console.log(marks);
const{marks:{maths}}=student
console.log(maths);
