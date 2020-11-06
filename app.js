// Include framework and packages
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// Define server related variables
const port = 3000

// Setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Setting static files
app.use(express.static('public'))

// Handle request and response
app.get('/', (req, res) => {
  const movieOne = {
    id: 1,
    img: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
    title: 'Jurassic World: Fallen Kingdom'
  }
  res.render('index', { movie: movieOne })
})

// Start and listen to the server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
