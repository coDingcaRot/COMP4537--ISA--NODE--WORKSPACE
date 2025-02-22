//ChatGPT was used to fix issues regarding file path directory and setup as well as package.json setup for digital ocean to recognize the paths

const http = require('http'); //server creation
let url = require('url'); // url parsing
let msg = require('./lang/en/en.js')

const lab_handler = require('./COMP4537/labs/lab_handler.js')

const lab3_path = '/COMP4537/labs/3'
const lab4_path = '/COMP4537/labs/4/api/definition'
const lab5_path = '/COMP4537/labs/5'

//Centralized Server call
http.createServer((req, res) => {
    const url = req.url;

    if(url.includes(lab3_path)){
        lab_handler.lab3_activate(req, res);
        return;
    }else if(url.includes(lab4_path)){ //lab 4 AJAX call
        lab_handler.lab4_activate(req, res);
        return
    }else if(requestUrl .includes(lab5_path)){ //lab 5 AJAX call
        lab_handler.lab5_activate(req, res);
        return
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write(
            `<div style="display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw;">
                <h1 style="color: red; text-align: center;">${msg.badReqMsg}</h1>
            </div>`)        
        res.end();
    }
}).listen(8888)

console.log('Server is running...')