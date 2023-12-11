const myNum = [1,2,3,4,5]

// const myTotal = myNum.reduce( function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// },0)

const myTotal = myNum.reduce( (acc,curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"backend course",
        price:4999
    },
    {
        itemName:"datascience course",
        price:12999
    },
    {
        itemName:"dsa course",
        price:1499
    },

]

const pricetoPay = shoppingCart.reduce( (acc,item)=> acc + item.price,0)

console.log(pricetoPay);