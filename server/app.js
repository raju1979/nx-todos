const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

// parse various different custom JSON types as JSON
app.use(bodyParser.json());

app.use(cors());

const todos = [];


app.get('/api/todos', function (req, res, next) {
  res.json({todos: todos})
});

app.post('/api/todos', (req,res) => {
	console.log("data is", uuidv4());
	todos.push(
		{title: req.body.title, id: uuidv4(), completed: false}
	);
	res.json({success: true}).status(201);
});

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})
