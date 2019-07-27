const express = require('express'),
	cors = require('cors'),
	mongoose = require('mongoose');

require('dotenv').config();

const app = express(),
	port = process.env.PORT || 5000; //creating server

app.use(cors()); //cors middleware
app.use(express.json()); //allows for json parsing

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log("MongoDB database connection established successfully")
})

const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
}); 