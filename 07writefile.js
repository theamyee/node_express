let fs=require('fs')

let message = 'I am scheduled to fly to Pluto tomorrow using the new file '

fs.writeFile('flymetopluto.txt',message,(error)=>{
    if(error){
        throw error
    }

    console.log('file write is success');
})