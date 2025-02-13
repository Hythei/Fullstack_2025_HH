const http = require('http');
const host = 'localhost';
const port = 3000;

const requestListener = function (req, res){
    res.setHeader('Content-Type',"text/html");
    switch(req.url){
        case "/about":
            res.writeHead(200);
            res.end("This would be the about page!");
            break
        
        case "/contact":
            res.writeHead(200);
            res.end("THIS WOULD BE THE CONTACT PAGE!");
            break
        case "/":
            res.writeHead(200);
            res.end("HELLO WORLD!");
            break
        default:
            res.writeHead(404);
            res.end("404, resource not found, and so on");
    }
};

// Tehtävää lisätty "default" siltä varalta jos yrittää testailla jollain muulla osoitteella. 
// Ei välttämätön, mutta vaikutti "standardilta", joten pukkasin mukaan

const server = http.createServer(requestListener);
server.listen(port, host, () =>{
    console.log('Server is RUNNING!')
});