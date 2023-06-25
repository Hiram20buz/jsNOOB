const fs = require('fs');

function main() {
  fs.readFile('path/to/file.txt', 'utf8', function(err, data) {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    console.log('File contents:', data);
  });
}

main();
