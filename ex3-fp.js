var fs = require('fs-promise');
var _ = require('lodash');
var file1 = process.argv[2];
var file2 = process.argv[3];
var outputFile = process.argv[4];

// fs.readFile(file1, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong because', err.message);
//     return;
//   }
//   var file1Lines = buffer.toString().split('\n');
//   fs.readFile(file2, function(err, buffer) {
//     if (err) {
//       console.log('Something went wrong because', err.message);
//       return;
//     }
//     var file2Lines = buffer.toString().split('\n');
//     fs.writeFile(outputFile, _.flatten(_.zip(file1Lines, file2Lines)).join('\n'), function(err) {
//       if (err) {
//         console.log('Something went wrong because', err.message);
//         return;
//       }
//     });
//   });
// });

Promise.all([fs.readFile(file1), fs.readFile(file2)])
  .then(function(buffers) {
    console.log(buffers);
    
  })

fs.readFile(file1)
  .then(function(buffer) {
    var file1_content = buffer.toString().split('\n');
    console.log("File1 content: ", file1_content);
    return fs.readFile(file2);
  })
  .then(function(buffer) {
    var file2_content = buffer.toString().split('\n');
    console.log("File2 content: ", file2_content);
    return fs.writeFile(outputFile, _.flatten(_.zip(file1_content, file2_content)).join('\n'));
  })
  .then(function() {
    console.log('Worked out!');
  })
  .catch(function(err) {
    console.log("Something went wrong because ", err.stack);
    return ;
  });









  //
