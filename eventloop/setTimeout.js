const {readdir}=require('fs')

console.log('first task')
setTimeout(()=>{
    console.log('this is first task')
    console.log('done first task')
},10)
console.log('second task')
readdir('./content',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('done second task')
})
console.log('next task')