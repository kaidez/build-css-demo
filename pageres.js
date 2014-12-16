var Pageres = require('pageres');

var pageres = new Pageres({delay: 2})
    .src('kaidez.com', ['480x320', "1024x768"])
    .dest("screenshots");

pageres.run(function (err) {
    if (err) {
        throw err;
    }

    console.log('done');
});
