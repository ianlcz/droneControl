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
      width: 16%;
      height: 17em;
      border-radius: 20em;
    }
  .button-one{
    padding:0;
    display: flex;
    flex-direction: row;
    justify-content : center;
    width: 50%;
  }
  .button-two{
    padding:0;
    display: flex;
    justify-content : center;
    flex-direction: row;
    justify-content : space-around;
    width: 120%;
  }
  .button-three{
    padding:0;
    display: flex;
    justify-content : center;
    flex-direction: row;
    justify-content : space-between;
    width: 100%;
    margin: 19px 0;
  }
    span {
      font-size: 35px;
      padding: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    color: #0b3268;
    font-family: "Manrope";
    cursor: pointer;
  }
    .round button, .pan button{
      border-radius: 5em;
      box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
  .button{
    padding:0;
    display: flex;
    justify-content : center;
    flex-direction: row;
    justify-content : space-around;
    width: 30%;
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
            <div className="button-one" >
                <button onClick={sendCommand(`forward ${amount}`)}><span className="symbol"><BiUpArrowAlt/></span></button>
            </div>
             <div className="button-two" >
                <button className="rotate" onClick={sendCommand('ccw 90')}><span className="symbol"><GiClockwiseRotation/></span></button>
                <button className="rotate" onClick={sendCommand('cw 15')}><span className="symbol"><GiAnticlockwiseRotation/></span></button>
            </div>

            <div className="button-three" >
                <button onClick={sendCommand(`left ${amount}`)}><span className="symbol"><BiLeftArrowAlt/></span></button>
                <button className="emergency" onClick={sendCommand('emergency')}><span className="symbol"><IoWarningOutline/></span></button>
                <button onClick={sendCommand(`right ${amount}`)}><span className="symbol"><BiRightArrowAlt/></span></button>
            </div>

            <div className="button-two">
                <button className="up" onClick={sendCommand(`up ${amount}`)}><span className="symbol"><BiArrowFromTop/></span></button>
                <button className="down" onClick={sendCommand(`down ${amount}`)}><span className="symbol"><BiArrowToBottom/></span></button>
            </div>
            <div className="button-one">
                <button onClick={sendCommand(`back ${amount}`)}><span className="symbol"><BiDownArrowAlt/></span></button>
            </div>
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