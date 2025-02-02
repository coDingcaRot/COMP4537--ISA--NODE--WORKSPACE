const http = require('http');
let date = require('./modules/utils');
let url = require('url')

const message = require('../lang/en/en')

http.createServer((req, res) => {
    let q = url.parse(req.url, true); //Check if the url is live and then print it
    
    //get query or ? segment
    let name;
    let queryData = q.query;
    name = queryData.name;
    if(name == null){
        name = "";
    }

    res.writeHead(200, {'Content-Type': 'text/html'}); //header response
    //Display the message
    res.write(message.welcomeMsg.replace('%1', name) + date.getDate())
    res.end(); //end response 
}).listen(8888)

console.log('Server is running...')