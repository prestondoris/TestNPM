const express = require('express');
//const port = 3000;
const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/dogs', (req, res) => {
	res.render('dogs');
})

app.get('/cats', (req, res) => {
	res.render('cats');
})

app.get('/snakes', (req, res) => {
	res.render('snakes');
})

app.get('/bears', (req, res) => {
	res.render('snakes');
})

app.listen(port, () => {
    console.log('The Server is listening on port ' + port);
});