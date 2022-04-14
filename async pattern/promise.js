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
      

    
    
  readText('./content/first.txt')
        .then(data => console.log(data))
        .catch(err => console.error(err))