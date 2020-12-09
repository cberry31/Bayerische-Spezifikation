const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8080;
const carFiles = fs.readdirSync('./public/Car-Info');
const carList = [];

const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "hp.html" : req.url
    );

    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    
    res.writeHead(200, { 'Content-Type': contentType });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

for (const FILE of carFiles) {
    const newCar = require(`./public/Car-Info/${FILE}`);
    carList.push(newCar);
}

function findCar(carName){
    carList.find(carName);
}

server.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(`Server listening at port ${port}...`);
    }
});