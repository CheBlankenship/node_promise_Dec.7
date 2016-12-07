var fs = require('fs');
var _ = require('lodash');
var file1 = process.argv[2];
var file2 = process.argv[3];
var outputFile = process.argv[4];

fs.readFile(file1, function(err, buffer) {
  if (err) {
    console.log('Something went wrong because', err.message);
    return;
  }
  var file1Lines = buffer.toString().split('\n');
  fs.readFile(file2, function(err, buffer) {
    if (err) {
      console.log('Something went wrong because', err.message);
      return;
    }
    var file2Lines = buffer.toString().split('\n');
    fs.writeFile(outputFile, _.flatten(_.zip(file1Lines, file2Lines)).join('\n'), function(err) {
      if (err) {
        console.log('Something went wrong because', err.message);
        return;
      }
    });
  });
});
