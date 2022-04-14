const {readFile, writeFile} = require ('fs')

readFile('./content/first.txt', 'utf8', (err,result)=>{

if(err) {
console.log(err);
return
}
const first= result;
console.log(first)

readFile('./content/second.txt', 'utf8', (err,result)=>{

    if(err){
    console.log(err)
    return
    }
    const second= result;
   console.log(second)

writeFile(
    './content/3.txt',
    `Here is the third text file , ${first}, ${second}`,'utf-8' ,(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
    }
    )                
})
})

