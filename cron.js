const cron = require('node-cron');
const { exec } = require("child_process");

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function() {
  console.log('.');
});

cron.schedule('0 4,16 * * *', function() {
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

cron.schedule('10 4,16 * * *', function() {
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

