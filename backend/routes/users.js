const router = require('express').Router(); //Express router needed because  it is a route that is being created
let User = require('../models/user.model');  //users model that was created

router.route('/').get((req, res) => {//First route
	User.find()  //find returns a promise
		.then(users => res.json(users))//returning in json users from database
		.catch(err => res.status(400).json('Error: ' + err));  //if error then return with error message
})

router.route('/add').post((req, res) => {  //handles incoming post requests
	const username = req.body.username;  //
	const newUser = new User({username});

	newUser.save()  //new user saved to database
		.then(() => res.json('User added!'))  //returning user added in json
		.catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;