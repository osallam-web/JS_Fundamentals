// Code to use prompts in Node
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Greeting and prompting for name and feedback
rl.question('Hello. What is your name ? ', function (name) {
console.log("It's nice to meet you,", name)
rl.question('Are you enjoying the course? Y for Yes and N for No ', function (answer) {
  if (answer === 'Y') {
  console.log(`${name}, is in the course and his answer is Yes`);
  }
  else {
    console.log(`${name}, is in the course and he is not enjoying the course sadly :(`);
  }
  rl.close();
});
});

// Thanking and Exiting node
rl.on('close', function () {
  console.log('\nThanks for participating!\nBye now :)');
  process.exit(0);
});
