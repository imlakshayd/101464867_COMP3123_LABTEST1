// Import necessary modules
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs'); // Define the Logs directory path

// Remove Logs directory and its contents if it exists
if (fs.existsSync(logsDir)) { // Check if Logs directory exists

    console.log('Logs directory exists. Proceeding to delete files and directory...');
  const files = fs.readdirSync(logsDir); // Read all files in the Logs directory

 
  for (const file of files) { // Delete each file
    console.log(`delete files...${file}`);
    fs.unlinkSync(path.join(logsDir, file)); // Delete file
  }

  // Remove the Logs directory
  fs.rmdirSync(logsDir);
  console.log('Logs directory removed.');
} else {
  console.log('Logs directory does not exist.');
}