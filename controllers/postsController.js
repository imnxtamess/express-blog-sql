const connection = require('../data/db')

function index(req, res) {

  const sql = 'SELECT * FROM posts'

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database Error' })
    console.log(results)
    res.json(results)
  })

}

module.exports = {
  index
}