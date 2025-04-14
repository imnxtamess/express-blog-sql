const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/postsRouter')

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Welcome to our server')
})

app.use(express.json())

app.use(express.static('public'))

app.use('/api/v1/posts', postsRouter)
