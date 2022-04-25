const {readFileSync,writeFileSync} = require('fs');


const first = readFileSync('../Content/first.txt','utf-8')
const second = readFileSync('../Content/second.txt','utf-8')

console.log("First file content:",first)
console.log("Second file content:",second)

// to update: use {flag: 'a'}
writeFileSync('../Content/result-sync.txt',`Here is the result : ${first} ${second}`,{flag: 'a'})
