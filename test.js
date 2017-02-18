var svair = require('./');
var example = require('./example.json');

var start = Date.now();

svair('example.numeroFiscal', example.referenceAvis, function (err, resp) {
    if (err) return console.log(err);
    console.log(resp);
    console.log((Date.now() - start) / 1000);
});
