window.addEventListener("keydown", checkKeyPress, false);
console.log()


function sendCommand(command) {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit('command', command);
  };
}

function checkKeyPress(key){
    if (key.keycode == "KeyL"){
        sendCommand('takeoff');
    }
}