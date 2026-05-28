const fs = require('fs');
const { execSync } = require('child_process');

let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  try {
    const payload = JSON.parse(input);
    const filePath = payload.file_path || payload.filePath || payload.path || payload.filepath;

    if (filePath) {
      // Run Prettier to format the file
      execSync(`npx prettier --write "${filePath}"`, { stdio: 'inherit' });
    }

    // Output empty JSON to indicate success without modifying the payload
    console.log(JSON.stringify({}));
    process.exit(0);
  } catch (error) {
    // Fail open, don't block on formatting errors
    console.error('Formatter Hook Error:', error.message);
    console.log(JSON.stringify({}));
    process.exit(0);
  }
});