const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");

const router = express.Router();



// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.post('/register', function (req, res) {

	console.log(req.body);

	let user = {...req.body};

	try {
		if(fs.existsSync(`${global.appRoot}/data/user.json`)) {
	        const data = fs.readFileSync(`${global.appRoot}/data/user.json`, 'utf8');
	        let users = JSON.parse(data);
	        console.log(users);
	        for(let i = 0; i < users.length; i++) {
	        	if(users[i]['email'] == req.body.email) {
	        		return res.status(409).json({"message": "user already exists"});
	        	}
	        }
	        users.push(user);
	        fs.writeFileSync(`${global.appRoot}/data/user.json`, JSON.stringify(users));
  			res.json({success: true});
	    } else {
	        console.log('The file does not exist.');
	        let users = [];
	        users.push(user);
	        console.log(users);
	        fs.writeFileSync(`${global.appRoot}/data/user.json`, JSON.stringify(users));
  			res.json({success: true});
	    }
		
	} catch(err) {
		console.log(err);
		res.send('some error').status(404);
	}
	 
})
// define the about route
router.post('/login', function (req, res) {
	try {
		const data = fs.readFileSync(`${global.appRoot}/data/user.json`, 'utf8')
		let user = JSON.parse(data);
	    console.log(user);
	    let userFirst = user[0]
	    const token = jwt.sign({ user: userFirst.email, name: userFirst.username }, 'TOKEN_SECRET', { expiresIn: '10h' });
	    res.json({token: token, username: userFirst.username, email: userFirst.email});
	} catch(err) {
		res.send('some error' + err).status(404);
	}
})

module.exports = router