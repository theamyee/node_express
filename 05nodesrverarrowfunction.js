//import http package from node runtime
let httpRef = require('http')

//use httpRef variable to create a server
//use createServer to create the new http server
//createServer will use ghost/anonymous generic callback function 
//to implement the server

//server has to deal with request and response as parameters
//request is incoming
//response is outgoing


let myFirstServer = httpRef.createServer((request,response)=>{
    //console.log(request)
    console.log('request received');
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write('<h1>Hello from node server.My very first server</h1>')
    response.write('<h2>I can send multiple responses ONLY before end!!!</h2>')
    response.write('<h2>I am a ghost/anonymous function</h2>')
    console.log('response being sent')
    response.end()
})

const PORT = 4000
//configure the port for the server to listen to the request
myFirstServer.listen(PORT)

