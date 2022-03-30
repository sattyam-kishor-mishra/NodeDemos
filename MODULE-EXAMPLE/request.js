encrypt = (data)=>{
    return 'Encrpted Data';
}
send=(url,data)=>{
    const encryptedData= encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`);
}

module.exports={
    send,
}
    
