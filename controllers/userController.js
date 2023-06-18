const User = require('../models/User');


const createUser = async(req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password) res.status(404).send('Not Found');

    const user  = new User({    
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    const result = await user.save();
    res.status(200).send(result);
    console.log(result);
};


const getUsers = async(req, res) => {
    const result = await User.find();
    if(result.length === 0 ) res.status(400).send('Users Not Found');
    res.status(200).send(result);
}

const getUserByName = async(req, res) => {
    const result = await User.find({name: req.body.name});
    if(result.length === 0 ) res.status(400).send('User Not Found');
    res.status(200).send(result);
}

const getUserById = async(req, res) => {
    const result = await User.find({_id: req.params.id});
    if(result.length === 0 ) res.status(400).send('User Not Found');
    res.status(200).send(result);
}

const changeUserById = async(req, res) => {
    if(!req.body.name && !req.body.password) res.status(400).send('Changes did not made');
    const result = await User.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            name: req.body.name,
            password: req.body.password
        }
    });
    res.status(200).send(result);
}

const removeUserById = async(req, res) => {
    const result = await User.findByIdAndRemove({_id: req.params.id});
    res.status(200).send(result);
}


module.exports = {
    createUser,
    getUsers,
    getUserByName,
    getUserById,
    changeUserById,
    removeUserById
}

