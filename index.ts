import { printCubeOfNumbers } from './challenges/weekly-8142';

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response('Bun!');
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

// Weekly Coding Challenge #8142
printCubeOfNumbers(6);
