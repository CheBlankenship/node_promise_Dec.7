var fs = require('fs-promise');

var file1 = process.argv[2];
// fs.readFile(filename, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//     return;
//   }
//   var content = buffer.toString();
//   console.log(content.toUpperCase());
// });

fs.readFile(file1)
  .catch(function(err) {
    console.log("SOME THING IS WRONG");
    console.log("Becouse: ", err.message);
    return;
  })
  .then(function(buffer) {
    console.log("contents of file1: ", buffer.toString().toUpperCase());
  });
