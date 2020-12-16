import React from "react";
import styled from 'styled-components';

const CommandGrid = styled.div`
    .container{
        margin: 0 auto;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content : space-evenly;
        width: 70%;
        height: 24em;
    }
    .button{
        display: flex;
        flex-direction: row;
        justify-content : space-around;
        width: 50%;
    }
    button{
        margin: 5px;
        width: 33%;
        height: 6em;
        background-color: white;
        color: #0b3268;
        font-family: "Manrope";
        border-radius: 5em;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
    .emergency {
        background-color: ;
    }
`;

function sendCommand(command) {
    return function () {
        console.log(`Sending the command ${command}`);
        socket.emit('command', command);
    };
}

const amount = 100;
const Direction = () => (
    <CommandGrid>
        <div className="container">
            <div className="button" >
                {/* Rotate to the left 90° */}
                <button className="rotate" onClick={sendCommand('ccw 90')}><span className="symbol">⟲</span> 90°</button>
                <button onClick={sendCommand(`forward ${amount}`)}><span className="symbol">↑</span> forward {amount}cm</button>
                {/* Rotate to the right 15° */}
                <button className="rotate" onClick={sendCommand('cw 15')}> 15° <span className="symbol">⟳</span></button>
            </div>

            <div className="button" >
                <button onClick={sendCommand(`left ${amount}`)}><span className="symbol">←</span> left {amount}cm</button>
                <button className="emergency" onClick={sendCommand('emergency')}> Emergency </button>
                <button onClick={sendCommand(`right ${amount}`)}>right {amount}cm <span className="symbol">→</span></button>
            </div>

            <div className="button">
                <button className="takeoff" onClick={sendCommand('takeoff')}>Take Off</button>
                <button onClick={sendCommand(`back ${amount}`)}><span className="symbol">↓</span> back {amount}cm</button>
                <button className="land" onClick={sendCommand('land')}>Land </button>
            </div>
        </div>
    </CommandGrid>
);

export default Direction;