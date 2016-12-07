var fs = require('fs');

var filename = process.argv[2];
fs.readFile(filename, function(err, buffer) {
  if (err) {
    console.log('Something went wrong.');
    console.log('Because: ', err.message);
    return;
  }
  var content = buffer.toString();
  console.log(content.toUpperCase());
});
