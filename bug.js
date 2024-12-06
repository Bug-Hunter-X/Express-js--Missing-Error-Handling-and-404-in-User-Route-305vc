const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUser(userId, (err, user) => {
    if (err) {
      //Error handling missing
      res.status(500).send('Internal Server Error');
    } else if (user) {
      res.json(user);
    } else {
      //Missing 404 handling
      res.status(404).send('User not found');
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));