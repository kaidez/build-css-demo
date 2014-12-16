var Pageres = require('pageres');

var pageres = new Pageres({delay:2})
  .src("localhost:8000", ["480x320"])
  .dest("screenshots");

pageres.run(function (err) {
  if (err) {
    throw err;
  }

  console.log("done");
});
