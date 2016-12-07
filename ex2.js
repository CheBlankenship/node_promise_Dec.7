var fs = require('fs-promise');

var file1 = process.argv[2];
var outputFilename = process.argv[3];


// fs.readFile(filename, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//     return;
//   }
//   var content = buffer.toString();
//   fs.writeFile(outputFilename, content.toUpperCase(), function(err) {
//     if (err) {
//       console.log('Something went wrong.');
//       console.log('Because: ', err.message);
//       return;
//     }
//   });
// });

fs.readFile(file1)
  .then(function(buffer) {
    var file1_content = buffer.toString().toUpperCase();
    console.log("File1 content: ", file1_content);
    return fs.writeFile(outputFilename, file1_content);
  })
  .then(function() {
    console.log("It worked!!");
  })
  .catch(function(err) {
    console.log("Something it wrong");
    console.log("Because: ", err.message);
  });
