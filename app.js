// Include framework and packages
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const movieList = require('./movies.json')

// Define server related variables
const port = 3000

// Setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Setting static files
app.use(express.static('public'))

// Handle request and response
app.get('/', (req, res) => {
  res.render('index', { movies: movieList.results })
})

app.get('/movies/:movie_id', (req, res) => {
  const movieID = req.params.movie_id
  const movie = movieList.results.find(item => item.id === Number(movieID))
  res.render('show', { movie: movie })
})

// Start and listen to the server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`);
})
