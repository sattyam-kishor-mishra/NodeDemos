const express = require('express');
const path = require('path');
const friendsRouter = require('./routs/friends.router');
const messagesRouter = require('./routs/messages.router');
const app = express();
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'views'));
const PORT = 3000;
//Middleware for log
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method}, ${req.baseUrl}${req.url}, ${delta} ms`);
});
app.use(express.json());

app.use('/site',express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render('index',{
        title:'My Bike',
        caption:'This is beautiful'
    })
})
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listning on ${PORT}..`);
});