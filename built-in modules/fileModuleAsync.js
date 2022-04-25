const {readFile,writeFile} = require('fs')

console.log('start')

readFile('../Content/first.txt','utf-8',(err,result) => {
    if(err){
        console.log(err.message)
        return
    }
    const first = result;

    readFile('../Content/second.txt','utf-8',(err,result) => {
        if(err){
            console.log(err.message)
            return
        }
        const second = result

        writeFile('../Content/result-async.txt',`Here is the  result ${first} + ${second}`,(err,result) => {
            if(err){
                console.log(err.message)
                return
            }
            console.log('done with this task')
        })

    })

})
console.log('starting next one')