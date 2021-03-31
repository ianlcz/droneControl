import React from "react";
import styled from 'styled-components';
import { RiFlightTakeoffLine, RiFlightLandLine } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import {BsArrowClockwise, BsArrowCounterclockwise} from "react-icons/bs";
import {GiRapidshareArrow, GiTronArrow, GiWingedArrow} from "react-icons/gi";
import KeyboardEventHandler from 'react-keyboard-event-handler';
import socket from "../../socket";

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
    span {
      font-size: 35px;
      padding: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  button{
    margin-bottom: 5%;
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
    width: 40%;
  }
    .emergency {
      background-color: darkred;
      color: white;
    }
    .pan{
      margin: 0 auto;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content : space-evenly;
    }
  .flipL span {
    transform: rotate(-44deg);
  }
  .flipR span {
    transform: rotate(135deg);
  }
  .flipB span {
    transform: rotate(50deg);
  }
  .flipF span {
    transform: rotate(227deg);
  }
  .goGo span {
    transform: rotate(224deg);
  }
  .curve span {
    transform: rotate(247deg);
  }
`;

function sendCommand(command) {
    return function () {
        try{
        console.log(`Sending the command ${command}`);
        socket.emit('command', command);
        } catch (error) {
          console.log(error);
        }
    };
}

function PressSendCommand(command) {
        try{
        console.log(`Sending the command ${command}`);
        socket.emit('command', command);
        } catch (error) {
          console.log(error);
        }
}



const amount = 100;
const Commands = (props) => (
    <CommandGrid>
        <div className="video">

        </div>
        <div style={{display:"none"}}>key detected: {props.eventKey}</div>
        <KeyboardEventHandler
          handleKeys={['t', 'l', 'z', 's', 'q', 'd']}
          onKeyEvent={(key, e) => {
              switch (key) {
               case 't':
                 PressSendCommand('takeoff');
                 break;
               case 'l':
                 PressSendCommand('land');
                 break;
               case 'z':
                 PressSendCommand('forward 100');
                 break;
               case 's':
                 PressSendCommand('back 100');
                 break;
                case 'q':
                 PressSendCommand('left 100');
                 break;
                case 'd':
                 PressSendCommand('right 100');
                 break;
                case 'a':
                 PressSendCommand('ccw 900');
                 break;
                case 'e':
                 PressSendCommand('cw 900');
                 break;
               default:
                 break;
             }
          }} />
        <div className="container pan">
            <div className="button">
                <button className="takeoff" onClick={sendCommand('takeoff')}><span className="symbol"><RiFlightTakeoffLine/></span></button>
                <button className="emergency" onClick={sendCommand('emergency')}><span className="symbol"><IoWarningOutline/></span></button>
                <button className="land" onClick={sendCommand('land')}><span className="symbol"><RiFlightLandLine/></span></button>
            </div>
            <div className="button">
                <button className="flipL" onClick={sendCommand('flip l')}><span className="symbol"><GiRapidshareArrow/></span></button>
                <button className="flipB" onClick={sendCommand('flip b')}><span className="symbol"><GiRapidshareArrow/></span></button>
                <button className="goGo" onClick={sendCommand('go 25 25 25 25')}><span className="symbol"><GiWingedArrow/></span></button>
                <button className="curve" onClick={sendCommand('curve 100 100 100 150 250 350 50')}><span className="symbol"><GiTronArrow/></span></button>
                <button className="flipF" onClick={sendCommand('flip f')}><span className="symbol"><GiRapidshareArrow/></span></button>
                <button className="flipR" onClick={sendCommand('flip r')}><span className="symbol"><GiRapidshareArrow/></span></button>
            </div>
        </div>
    </CommandGrid>
);

export default Commands;