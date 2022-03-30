const http=require('http');
const PORT = 3000;
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
    
    const items=req.url.split('/');    
    if(items[1]==='friends'){
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        console.log(items);
        if(items.length===3){
            res.end(JSON.stringify(friends[parseInt(items[2])]));
        }else{
            res.end(JSON.stringify(friends));
        }        
    } else if (items[1]==='messages'){
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