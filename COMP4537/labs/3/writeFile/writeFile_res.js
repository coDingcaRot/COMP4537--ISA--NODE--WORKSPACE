// Writefile
const url = require('url');
const fs = require('fs');
const path = require('path');

exports.writeFile_res = (req, res) => {
    const q = url.parse(req.url, true);
    let text = q.query.text;


    // Check if there is any text to append
    if (!text) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('No text to write.\n');
        res.end();
        return;
    }

    const filePath = path.join(__dirname, 'file.txt');

    fs.appendFile(filePath, `${text}\n`, (err) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' }); // Internal Server Error
            res.write('Error occurred, text not written.\n');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Text appended to file.\n');
            res.end();
        }
    });

}

