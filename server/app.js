const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');


const app = express();

const authRoute = require("./routes/authRoute");
const todoRoute = require("./routes/todosRoute");

global.appRoot = path.resolve(__dirname);

// parse various different custom JSON types as JSON
app.use(bodyParser.json());

app.use(cors());

const todos = [];

app.use('/api/auth', authRoute);
app.use('/api/todo', todoRoute);

// app.get('/api/todos', function (req, res, next) {
//   res.json({todos: todos})
// });

// app.post('/api/todos', (req,res) => {
// 	console.log("data is", uuidv4());
// 	todos.push(
// 		{title: req.body.title, id: uuidv4(), completed: false}
// 	);
// 	res.json({success: true}).status(201);
// });

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})
