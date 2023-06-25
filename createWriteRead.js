const fs = require('fs');

function writeFile() {
  const content = 'This is the content of the file.';
  fs.writeFile('path/to/file.txt', content, 'utf8', function(err) {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('File has been written successfully.');
    readFile();
  });
}

function readFile() {
  fs.readFile('path/to/file.txt', 'utf8', function(err, data) {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    console.log('File contents:', data);
  });
}

writeFile();
