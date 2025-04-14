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

  const slug = postSlug.replaceAll('-', ' ')

  const sql = 'SELECT * FROM posts WHERE title = ?'

  const sqlJoin = `
  SELECT tags.label
  FROM post_tag
  JOIN tags ON post_tag.tag_id = tags.id
  WHERE post_tag.post_id = ? 
  `

  connection.query(sql, [slug], (err, postResults) => {
    if (err) return res.status(500).json({ error: 'Database query failed' })
    if (postResults.length === 0) return res.status(404).json({ error: 'Post not found' })
    const post = postResults[0]
    const id = postResults[0].id
    connection.query(sqlJoin, [id], (err, tagsResults) => {
      if (err) return res.status(500).json({ message: 'Query Failed' })
      post.tags = tagsResults
      res.json(post)
    })

  })


}

function destroy(req, res) {
  const postSlug = (req.params.slug)

  const slug = postSlug.replaceAll('-', ' ')

  const sql = 'DELETE FROM posts WHERE title = ?'

  connection.query(sql, [slug], (err) => {
    if (err) return res.status(500).json({ error: 'Failed to delete post' })
    res.sendStatus(204)

  })
}
module.exports = {
  index,
  show,
  destroy
}
