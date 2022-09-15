const cron = require('node-cron');
const { exec } = require("child_process");

// Schedule tasks to be run on the server.
cron.schedule('0,15,30,45 * * * * *', function() {
  console.log('running a task every second');
  exec('date', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
});

cron.schedule('15 5 * * *', function() {
  exec('npm run myconsole process avail', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
});

cron.schedule('30 5 * * *', function() {
  exec('npm run myconsole process unavail', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
});

