const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/genreDetails', (req, res) => {
  // Add query to get all genres
  const queryText = `
  SELECT * FROM "movies" JOIN "movies_genres"
  ON "movies"."id" = "movies_genres"."movie_id";
  `;
  pool.query(queryText).then(result => {
    res.send(result.rows);
  }).catch(err => {
    console.log('ERROR: Get all genres', err);
    res.sendStatus(500)
  })

});

module.exports = router;