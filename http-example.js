//const http= require('https');
//ecma6

//const{request}=require('https');
//const req=http.request('https://www.google.com',(res)=>{
// const req=request('https://www.google.com',(res)=>{
//     res.on('data',(chunk)=>{
//         console.log(`Data Chunk : ${chunk}`);
//     });

//     res.on('end',()=>{
//         console.log(`No more data!`);
//     });
// })

// req.end();

//if we use get instead of the request make as const 

const {get}= require('https');

get('https://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(`Data Chunk : ${chunk}`);
    });

    res.on('end',()=>{
        console.log(`No more data!`);
    });
})