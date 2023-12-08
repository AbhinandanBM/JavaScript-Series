// forEach

let ipl = ["RCB","MI","CSK","RR","GT","KKR"]

ipl.forEach( function (val){
    // console.log(val);
})

ipl.forEach( (item) => {
    // console.log(item);
})

function printMe(val){
    console.log(val);
}

// ipl.forEach(printMe)


ipl.forEach( (val,index,arr)=>{
    // console.log(val,index,arr);
})

const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName ,"->", item.languageFileName);
})