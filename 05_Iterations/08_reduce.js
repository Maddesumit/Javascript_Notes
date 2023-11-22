const myNums = [1, 2, 3]

const newNums=myNums.reduce((accumulator, currentValue)=>accumulator+currentValue,
4/*4 will act as initial value for accumulator */)
// accumulator is a initial value which is passed at last
//CurrentValue is feteched from array
console.log(newNums);

const shoppingCart=[
{
    courseName:"Js Course",
    price:999 
},
{
    courseName:"HTML",
    price:600
},
{
    courseName:"CSS + Bootstrap",
    price:1299
}
]

let TotalPrice =shoppingCart.reduce((acc,price)=>acc+price.price,0)
console.log(TotalPrice);