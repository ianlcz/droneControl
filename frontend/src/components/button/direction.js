import React from "react";
import styled from 'styled-components';
import { RiFlightTakeoffLine, RiFlightLandLine } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import { GiClockwiseRotation, GiAnticlockwiseRotation } from "react-icons/gi";
import { BiArrowFromTop, BiArrowToBottom, BiLeftArrowAlt, BiRightArrowAlt, BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const CommandGrid = styled.div`
    .video{
      height: 30em;
    }
    .round{
      margin: 0 auto;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content : space-evenly;
      width: 24%;
      height: 24em;
      border-radius: 200px;
      background-color: darkred;
    }
    .circle-container li{
      list-style: none;
    }
    .button{
      padding:0;
      display: flex;
      flex-direction: row;
      justify-content : space-around;
      width: 50%;
    }
    span {
      font-size: 30px;
      text-align: center;
    }
    button{
      cursor: pointer;
      width: 9%;
      height: 4em;
      background-color: white;
      color: #0b3268;
      font-family: "Manrope";
      border-radius: 5em;
      box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
    .emergency {
      background-color: darkred;
      color: white;
    }
  .up {
    transform: rotate(180deg);
  }
  .pan{
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content : space-evenly;
    width: 70%;
    height: 5em;
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
        <div className="video">

        </div>
        <div className="container round">
            <ul className='circle-container'>
                <li> <button className="rotate" onClick={sendCommand('ccw 90')}><span className="symbol"><GiClockwiseRotation/></span></button></li>
                <li><button onClick={sendCommand(`forward ${amount}`)}><span className="symbol"><BiUpArrowAlt/></span></button></li>
                <li><button className="rotate" onClick={sendCommand('cw 15')}><span className="symbol"><GiAnticlockwiseRotation/></span></button></li>
                <li><button onClick={sendCommand(`left ${amount}`)}><span className="symbol"><BiLeftArrowAlt/></span></button></li>
                <li><button onClick={sendCommand(`right ${amount}`)}><span className="symbol"><BiRightArrowAlt/></span></button></li>
                <li> <button className="up" onClick={sendCommand('takeoff')}><span className="symbol"><BiArrowFromTop/></span></button></li>
                <li><button onClick={sendCommand(`back ${amount}`)}><span className="symbol"><BiDownArrowAlt/></span></button></li>
                <li><button className="down" onClick={sendCommand('down')}><span className="symbol"><BiArrowToBottom/></span></button></li>
            </ul>
            {/* <div className="button" >*/}
            {/*     Rotate to the left 90° */}
            {/*    <button className="rotate" onClick={sendCommand('ccw 90')}><span className="symbol"><GiClockwiseRotation/></span></button>*/}
            {/*    <button onClick={sendCommand(`forward ${amount}`)}><span className="symbol"><BiUpArrowAlt/></span></button>*/}
            {/*     Rotate to the right 15° */}
            {/*    <button className="rotate" onClick={sendCommand('cw 15')}><span className="symbol"><GiAnticlockwiseRotation/></span></button>*/}
            {/*</div>*/}

            {/*<div className="button" >*/}
            {/*    <button onClick={sendCommand(`left ${amount}`)}><span className="symbol"><BiLeftArrowAlt/></span></button>*/}
            {/*    <button className="emergency" onClick={sendCommand('emergency')}><span className="symbol"><IoWarningOutline/></span></button>*/}
            {/*    <button onClick={sendCommand(`right ${amount}`)}><span className="symbol"><BiRightArrowAlt/></span></button>*/}
            {/*</div>*/}

            {/*<div className="button">*/}
            {/*    <button className="up" onClick={sendCommand('up')}><span className="symbol"><BiArrowFromTop/></span></button>*/}
            {/*    <button onClick={sendCommand(`back ${amount}`)}><span className="symbol"><BiDownArrowAlt/></span></button>*/}
            {/*    <button className="down" onClick={sendCommand('down')}><span className="symbol"><BiArrowToBottom/></span></button>*/}
            {/*</div>*/}
        </div>
        <div className="container pan">
            <div className="button">
                <button className="takeoff" onClick={sendCommand('takeoff')}><span className="symbol"><RiFlightTakeoffLine/></span></button>
                <button className="land" onClick={sendCommand('land')}><span className="symbol"><RiFlightLandLine/></span></button>
            </div>
        </div>
    </CommandGrid>
);

export default Direction;