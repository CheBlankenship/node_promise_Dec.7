var fs = require('fs');

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
    var allLines = [];
    file1Lines.forEach(function(line, idx) {
      allLines.push(line);
      allLines.push(file2Lines[idx]);
    });
    fs.writeFile(outputFile, allLines.join('\n'), function(err) {
      if (err) {
        console.log('Something went wrong because', err.message);
        return;
      }
    });
  });
});
