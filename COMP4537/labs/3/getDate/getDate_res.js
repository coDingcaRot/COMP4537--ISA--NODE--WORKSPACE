let date = require('./modules/utils.js');
let url = require('url')

const msg = require('../../../../lang/en/en.js')

exports.getDate_res = (req, res) => {
    let q = url.parse(req.url, true);
    
    //get query or ? segment
    let name;
    let queryData = q.query;
    name = queryData.name;
    if(name == null){
        name = "";
    }

    res.writeHead(200, {'Content-Type': 'text/html'}); //header response
    //Display the message
    res.write(
        `<div style="display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw;">
            <p style="color: blue; text-align: center;">${msg.welcomeMsg.replace('%1', name).replace('*', date.getDate())}</p>
        </div>`)
    res.end(); //end response 
}