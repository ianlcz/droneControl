import React, { useEffect, useState } from "react";
import socket from "../socket";

const VIDEO = () => {
  const [videoSignal, setVideoSignal] = useState()

    useEffect(() => {
      socket.on("messageVideo", setVideoSignal);
      setVideoSignal(setVideoSignal);
      return () => socket.removeListener("messageVideo");
    }, []);
    
  var returnedArrayBuffer = videoSignal;
  var newVideoBlob = new Blob([returnedArrayBuffer], { type: 'application/octet-stream' });
  var url = URL.createObjectURL(newVideoBlob);
  console.log(url);

  return (
    <div>
      <video constrols
        height={700}
        width={1200}
        //muted={true}
        autoPlay={true}
        //loop
        crossOrigin="anonymous"
        //src={url}
      > 
        <source src={url}/>
      </video>
    </div>
  );
};

export default VIDEO;
