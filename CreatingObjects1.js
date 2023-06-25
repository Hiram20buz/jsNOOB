const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  rl.question('Enter flight number: ', function(flightNumber) {
    rl.question('Enter flight status: ', function(flightStatus) {
      const flight1 = new Flight(flightNumber, flightStatus);
      console.log('The flight ' + flight1.number + ' is ' + flight1.status);
      rl.close();
    });
  });
}

function Flight(flightNumber, status) {
  this.number = flightNumber;
  this.status = status;
}

main();
