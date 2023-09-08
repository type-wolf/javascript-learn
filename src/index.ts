import path from 'path';
import { spawn, ChildProcess } from 'child_process';

// Get the path of the file to execute from the command line argument

// Get the path to the file from the 3rd argument
const category = process.argv[2];
const dir = process.argv[3];
const fileName = process.argv[4];

// If the file path is not set
if (!dir || !fileName) {
	console.error('❌ The path to the file to be executed is not specified');
	process.exit(1);
}

const scriptPath = path.resolve(`dist/${category}/${dir}`, fileName);

// File Execution
const childProcess: ChildProcess = spawn('node', ['-r', 'dotenv/config', scriptPath], {
	// Share standard input/output of child process with parent process
	stdio: 'inherit',
});

// Wait for child process to terminate
childProcess.on('close', (code) => {
	if (code !== 0) {
		console.error(`❌ process terminated with error code ${code}`);
	}
});
