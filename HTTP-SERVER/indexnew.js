const http=require('http');
const PORT = 4000;
const server = http.createServer();
const friends = [
    {
        id:0,
        name: 'Sattyam'
    },
    {
        id:1,
        name: 'Shweta Tyagi'
    },
    {
        id:2,
        name: 'Mohisha'
    }
]

server.on('request',(req,res)=>{
    if(req.url==='/friends'){
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(friends));
    } else if (req.url==='/messages'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        res.write(`<html><body>
            <ul>
            <li>Sattyam Kishor Mishra</li>
            <li>Shweta Tyagi</li>
            <li>Mohisha Mishra</li>            
            </ul></body></html>
        `)
        res.end();
    } else {
        res.statusCode=404;
        res.end();
    }
});





server.listen(PORT,()=>{
    console.log(`Listne to the post ${PORT}...`);
})