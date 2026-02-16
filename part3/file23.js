numbers = [5, 6, 3, 1]


// 
// numbers.forEach(() => {})
// numbers.forEach((number) => {
//     console.log(number);          // insead of forEach map can also be used it does not create any major diference 
// })


// numbers.map(() => {})
// 
// const newArray = numbers.map((number)=> {
//     return number+1
// })
// console.log(newArray);


// numbers.filter(() => {})
// 
// const evenNumbers = numbers.filter((number) => {
//     return number%2===0
// })
// console.log(evenNumbers);

// numbers.find(() => {})
// it stops the search when the condition is met and returns the first result 
// const result = numbers.find((number) => {
//     return number>3
// })
// console.log(result);

// numbers.reduce(() => {})
//
// const result = numbers.reduce((sum ,number) => {
//     return sum + number
// }, 0)
// console.log(result);

// numbers.some(() =>{})
// if any one number matchs the condition it returns true else false
// const result = numbers.some((number) => {
//     return number>20
// })
// console.log(result);


// let marks = [78, 50, 90, 20]
// const result = marks.some((mark) => {
//     return mark > 90
// })
// if(result) console.log("Pass");
// else console.log("Fail");


let marks = [78, 50, 90, 20]
const result = marks.every((mark) => {
    return mark > 19
})
console.log(result);



