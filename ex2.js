var fs = require('fs');

var filename = process.argv[2];
var outputFilename = process.argv[3];


fs.readFile(filename, function(err, buffer) {
  if (err) {
    console.log('Something went wrong.');
    console.log('Because: ', err.message);
    return;
  }
  var content = buffer.toString();
  fs.writeFile(outputFilename, content.toUpperCase(), function(err) {
    if (err) {
      console.log('Something went wrong.');
      console.log('Because: ', err.message);
      return;
    }
  });
});
