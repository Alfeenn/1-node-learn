const {readFile} = require('fs');
const readText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
                return;
            }
       
                resolve(data)
            
        })
    })
        }
      

        const start=async()=>{
            try {
                const first =await readText('./content/first.txt')
                const second= await readText('./content/second.txt')
            console.log(first,second) 
            } catch (error) {
                console.log(error)
                
            }
           
        }
        start()
    
  // readText('./content/first.txt')
        // .then(data => console.log(data))
        // .catch(err => console.error(err))