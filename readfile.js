const {readFileSync, writeFileSync} = require ('fs')
const readfile = readFileSync('./content/first.txt', 'utf8')

console.log(readfile)
writeFileSync(
    
    './content/second.txt', 
    'abcd', 
    {flag: 'a'}
    
    )