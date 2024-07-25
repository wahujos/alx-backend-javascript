const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  res.setHeader('Content-Type', 'text/plain');

  if (parseUrl.pathname === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (parseUrl.pathname === '/students') {
    res.write('This is the list of our students\n');
    countStudents(databaseFile)
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  } else {
    res.write('Not Found');
    res.end();
  }
});
app.listen(1245);

module.exports = app;
