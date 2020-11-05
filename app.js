// Include framework and packages
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// Define server related variables
const port = 3000

// Setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Handle request and response
app.get('/', (req, res) => {
  res.render('index')
})

// Start and listen to the server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
