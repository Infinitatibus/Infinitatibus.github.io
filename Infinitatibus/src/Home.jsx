import { useEffect, useState } from "react";

import ShakeText from "./Components/ShakeText/ShakeText";
import Keyboard from "./Components/Keyboard/Keyboard";

import moon from './Assets/moon.png'
import sun from './Assets/sun.png'

import './Home.css';

export default function Home() {
  const [reply, setReply] = useState("WHAT DO YOU SEEK?");
  const [input, setInput] = useState("");

  const addCharacter = (char) => {
    setInput(prevText => prevText + char);
  };

  const delCharacters = () => {
    setReply("BEGIN AGAIN.");
    setInput("");
  };

  const evalCharacters = () => {
    if (input == "GNARL") {
      setReply("PISS OFF.");
    } else if (input == "VS") {
      setReply("MY FAVORITE PART IS THE ONE WHERE NYOKO EATS SHIT AND DIES")
    }

    else {
      setReply("...")
    }

    setInput("");
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <>
      <div className="central">
        <ShakeText mag={5} speed_factor={0.0005} seed={39}>{reply}</ShakeText>
      </div>
      <div className="central">
        <ShakeText mag={2} speed_factor={0.0008} seed={40}>{input}</ShakeText>
      </div>
      <br/><br/><br/><br/><br/>
      <Keyboard width={2000} height={400} radius={300} onKey={addCharacter}/>
      <div className="buttons">
        <button type="button" className="kbbutton" onClick={delCharacters}>
          <img src={moon} alt="Moon" width="50" height="50"/>
        </button>
        <button type="button" className="kbbutton" onClick={evalCharacters}>
          <img src={sun} alt="Sun" width="55" height="55"/>
        </button>
      </div>
    </>
  );
}
