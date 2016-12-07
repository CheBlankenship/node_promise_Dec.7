var fs = require('fs');

var filename = process.argv[2];
var outputFilename = process.argv[3];

try {
  var buffer = fs.readFileSync(filename);
  var content = buffer.toString();
  fs.writeFileSync(outputFilename, content.toUpperCase());
} catch (error) {
  console.log('Something went wrong.');
  console.log('Because: ', error.message);
}
