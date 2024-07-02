const arr = [1,2,3,4,5]
const initialValue =0
const Total = arr.reduce((acc, val) => {
   return acc+val
 } , initialValue)



const cart = [
    {
        name : "Tshirt",
        price : 299
    },
    {
        name : "Tshirt2",
        price : 299
    },
    {
        name : "Tshirt3",
        price : 299
    },
    {
        name : "Tshirt4",
        price : 299
    }
]


let Total1 =  cart.reduce((acc, val) =>{
    return acc+ val.price
} ,0)

console.log(Total1)