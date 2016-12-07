var fs = require('fs-promise');

var file1 = process.argv[2];
var outputFilename = process.argv[3];

// try {
//   var buffer = fs.readFileSync(filename);
//   var content = buffer.toString();
//   fs.writeFileSync(outputFilename, content.toUpperCase());
// } catch (error) {
//   console.log('Something went wrong.');
//   console.log('Because: ', error.message);
// }

fs.readFile(file1)
  .then(function(buffer) {
    // console.log("contents if file1", buffer.toString());
    var content = buffer.toString();
    return fs.writeFile(outputFilename, content);
  })
  .then(function() {
    console.log('It worked!');
  })
  .catch(function(err) {
    console.log("SOMETHING IS GOING WRONG.");
    console.log("Because: ", err.message);
  });
  
