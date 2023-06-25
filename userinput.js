const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? and your age? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

