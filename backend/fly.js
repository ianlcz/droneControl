const dgram = require('dgram');
const wait = require('wait');
const commandDelays = require('./commandDelays');

const PORT = 8889;
const HOST = '192.168.10.1';

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

const droneState = dgram.createSocket('udp4');
droneState.bind('8890');

function parseState(state) {
    return state.toString().split(';').map(x => x.split(':'));
}

drone.on('message', message => {
    console.log(`log : ${message}`);
})

droneState.on('message', state => {
    console.log(state.toJSON());
    const formattedState = parseState(state.toJSON());
    console.log(formattedState);
});

function handleError(err) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    }
}


//drone.send('command', 0, 7, PORT, HOST, handleError);
//drone.send('battery?', 0, 8, PORT, HOST, handleError);

const commands = ['command', 'battery?', 'takeoff', 'time?', 'land'];
//const commands = ['command', 'battery?'];
let i = 0;

async function go() {
    const command = commands[i];
    const delay = commandDelays[command];
    console.log(`running command: ${command}`);
    drone.send(command, 0, command.length, PORT, HOST, handleError);
    await wait(delay);
    i = i + 1;
    if(i<command.length) {
        return go();
    }
    console.log('done');
}

go();