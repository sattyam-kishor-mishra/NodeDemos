const EventEmitter= require('events')
const celebrity=new EventEmitter();

celebrity.on('race', (results)=>{
    if(results==='win'){
        console.log('Congratulation, You are the best !');    
    }else if(results==='lost'){
        console.log('Oops, You lost the race, Better luck next time!');
    }
    
})


celebrity.on('race', (results)=>{
    if(results==='win'){
        console.log('Boo, I can do better than that !');
    }else if(results==='lost'){
        console.log('Yohoo, I won the race');
    }
    
})



process.on('exit', (code)=>{
    console.log('Process Exit event with code : ' , code);
})

celebrity.emit('race', 'win')
celebrity.emit('race', 'lost')