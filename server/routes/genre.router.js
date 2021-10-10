const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/genreDetails/:id', (req, res) => {
  // Add query to get all genres
  const queryText = `
  SELECT * FROM "movies" JOIN "movies_genres"
  ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "movies_genres"."genre_id" = "genres"."id"
  WHERE "movies"."id" = $1;
  `;
  pool.query(queryText, [req.params.id]).then(result => {
    console.log('This is result.rows, ', result.rows);
    res.send(result.rows);
  }).catch(err => {
    console.log('ERROR: in joined get ', err);
    res.sendStatus(500)
  })

});

module.exports = router;