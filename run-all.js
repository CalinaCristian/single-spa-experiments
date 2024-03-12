const { spawn } = require('child_process');

const POSSIBLE_COMMANDS = ['start', 'install'];
const mode = process.argv[2];

if (!POSSIBLE_COMMANDS.includes(mode)) {
    console.log('Usage: node start-all [install | start] for starting / installing the projects');

    process.exit(1);
}

const install = mode === 'install';

const projects = [{
    name: 'ng-app',
    command: install ? 'install' : 'run serve:single-spa:ng-app'
}, {
    name: 'react-app',
    command: install ? 'install' : 'run start'
}, {
    name: 'react-app-vite',
    command: install ? 'install' : 'run start:spa'
}, {
    name: 'root-config',
    command: install ? 'install' : 'run start'
}];

const processProject = ({ name, command }) => {
    console.log(`Running ${name}...`);
    const npmStart = spawn('npm', [command], { cwd: name, stdio: 'inherit', shell: true });

    npmStart.on('error', (err) => {
        console.error(`Failed to start ${name}: ${err}`);
    });

    npmStart.on('close', (code) => {
        console.log(`${name} exited with code ${code}`);
    });
};

projects.forEach(processProject);