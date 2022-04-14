const {readFile,writeFile} = require('fs').promises;


        const start=async()=>{
            try {
                const first =await readFile('./content/first.txt','utf8')
                const second= await readFile('./content/second.txt','utf8')
                await writeFile('./content/third.txt',`This is awesome ${first},${second}`,{flag:'a'})
                console.log(first,',', second,) 
            } catch (error) {
                console.log(error)
                
            }
           
        }
        start()
        
// const util = require('util');
// const readtextPromise = util.promisify(readFile)
// const writetextPromise = util.promisify(writeFile)

    //const readText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//                 return;
//             }
       
//                 resolve(data)
            
//         })
//     })
//         }
      
  // readText('./content/first.txt')
        // .then(data => console.log(data))
        // .catch(err => console.error(err))