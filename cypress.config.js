const { defineConfig } = require('cypress');
const { spawn } = require('child_process');

let server;
let baseUrl;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        startServer() {
          return new Promise((resolve, reject) => {
            if (server) {
              resolve(baseUrl);
              return;
            }
            server = spawn('node', ['index-test.js']);
            server.stdout.on('data', (data) => {
              const output = data.toString();
              console.log(output);
              if (output.includes('Student Management System is running at')) {
                baseUrl = 'http://localhost:5050';
                resolve(baseUrl);
              }
            });
            server.stderr.on('data', (err) => {
              reject(err.toString());
            });
          });
        },
        stopServer() {
          if (server) {
            server.kill();
            server = null;
          }
          return null;
        },
      });
      return config;
    },
  },
});
