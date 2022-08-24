//fs is the package needed for basic file interaction
let fs = require('fs')


fs.readFile('myfile.txt',(error,data)=>{
    if(error){
        throw console.error();
    }
    console.log('file read is success...');
    console.log('by deafult, all data will be a hexadecimal code');
    console.log('contents of the file is as beloe: ');
    console.log(data)
    console.log('convert hexadecimal content to readable content');
    console.log(data.toString());
} )
