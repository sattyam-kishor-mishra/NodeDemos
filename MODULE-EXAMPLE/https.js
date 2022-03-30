const { read } = require("./response");
const { send } = require("./request")

request=(url,data)=>{
    send(url,data);
    return read();
}

const responseData=request('https://www.google.com','Hello');
console.log(responseData);