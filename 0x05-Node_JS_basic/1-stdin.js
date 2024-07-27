process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (input) => {
    const name = input.toString();
    process.stdout.write(`Your name is: ${name}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (input) => {
    process.stdout.write(`Your name is: ${input.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
