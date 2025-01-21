const express = require('express');
const app = express();

app.use(express.static(__dirname)); // Serve static files from the current directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});