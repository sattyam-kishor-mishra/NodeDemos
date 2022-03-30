function getMessages(req, res) {
    res.render('messages',{
        title:'Messages Page',
        middlename:'Kishor',
        lastname:'Mishra'
    })
}
function postMessages(re, res) {
    console.log('Updating message..');
}

module.exports = {
    getMessages,
    postMessages,
};