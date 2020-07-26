const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

let todos = [];

// define the home page route
router.post('/', function (req, res) {
	console.log(req.body);
	let newTodo = {title: req.body.title, id: uuidv4(), completed: false}
	todos = [...todos, {...newTodo}];

	res.status(201).json({"todo": newTodo});
	console.log(todos);
});

router.get('/', (req, res) => {
	res.json(todos)
})

module.exports = router;