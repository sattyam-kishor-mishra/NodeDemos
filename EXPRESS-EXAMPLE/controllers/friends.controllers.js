const model = require('../models/friends.model');

function postFriends(req, res) {
    console.log(req.body);
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Wrong request!'
        });
    }
    const newFriend = {
        name: req.body.name,
        id: model.length
    };
    model.push(newFriend);
    res.json(newFriend);

}

function getFriends(req, res) {       
    res.json(model);
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model.filter(f => f.id == friendId);
    if (model.length > 0) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        });
    }
}

module.exports = {
    postFriends,
    getFriends,
    getFriend,
}