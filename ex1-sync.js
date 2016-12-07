var fs = require('fs-promise');
console.log(process.argv);
var filename = process.argv[2];
var file2 =  process.argv[3];
// try {
//   var buffer = fs.readFileSync(filename);
//   var content = buffer.toString();
//   console.log(content.toUpperCase());
// } catch (error) {
//   console.log('Something went wrong.');
//   console.log('Because: ', error.message);
// }

///////////////////////////////
fs.readFile(filename)
  .then(function(buffer) {
    console.log('contents of file 1', buffer.toString());
    return fs.readFile(file2);
  })
  .then(function(buffer) {
    console.log('contents of file 2', buffer.toString());
  })
  .catch(function(err) {
    console.log('Something is wrong..');
    console.log('Because: ', err.message);
  });
