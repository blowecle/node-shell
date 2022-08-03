process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    process.stdout.write('You typed: ' + cmd + '\nprompt > ');
    let commandExe = require('./pwd');
    commandExe(cmd);
    commandExe = require('./ls');
    commandExe(cmd);
    commandExe = require('./cat');
    commandExe(cmd);
});