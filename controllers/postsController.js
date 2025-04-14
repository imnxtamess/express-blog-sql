const connection = require('../data/db')


function index(req, res) {

  const sql = 'SELECT * FROM posts'

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database Error' })
    console.log(results)
    res.json(results)
  })

}

function show(req, res) {

  const postSlug = (req.params.slug)

  const sql = 'SELECT * FROM posts WHERE title = ?'

  connection.query(sql, [postSlug], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' })
    if (results.length === 0) return res.status(404).json({ error: 'Post not found' })
    const post = results[0]
    res.json(post)
  })


}

module.exports = {
  index,
  show
}