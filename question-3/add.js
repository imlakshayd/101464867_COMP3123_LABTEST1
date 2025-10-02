// Import necessary modules
const fs = require('fs'); 
const path = require('path'); 

const logsDir = path.join(__dirname, 'Logs'); // Define the Logs directory path

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log('Logs directory was created.'); // Log directory creation
} else {
  console.log('A directory called "Logs" already exists.'); // Log if directory already exists
}

// Change current working directory to Logs
process.chdir(logsDir);

console.log(`Current working directory: ${process.cwd()}`); // Log current working directory


// Create 10 log files named log0.txt to log9.txt

console.log('Creating log files:'); // Log file creation start

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `Log file number ${i} is created.`); // Create file with content
  console.log(fileName);
}

console.log('Log files created successfully.'); // Log file creation success