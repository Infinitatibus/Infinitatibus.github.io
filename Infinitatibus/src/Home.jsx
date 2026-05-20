import { useEffect, useState } from "react";

import ShakeText from "./Components/ShakeText/ShakeText";
import Keyboard from "./Components/Keyboard/Keyboard";

import moon from './Assets/moon.png'
import sun from './Assets/sun.png'

import './Home.css';





export default function Home() {
  const [reply, setReply] = useState("WHAT DO YOU SEEK?");
  const [input, setInput] = useState("");

  //FLAGS
  const [bye, setbye] = useState(false);


  //---------------------------------------------------REPLY FUNCTIONS--------------------------------------------------
  const defaultFunc = () => {setReply("...")};

  //template
  const Func = () => {setReply("")};

  const gnarlFunc = () => {setReply("PISS OFF.")};
  const vsFunc = () => {setReply("MY FAVORITE PART IS THE ONE WHERE NYOKO EATS SHIT AND DIES.")};

  const flatterFunc = () => {setReply("FLATTERING, BUT NO.")};
  const meFunc = () => {setReply("I DON'T KNOW WHO I'M SUPPOSED TO BE ANYMORE.")};
  const friendFunc = () => {setReply("YOU'VE GOT ME NOW.")};
  const nameFunc = () => {setReply("WHO?")};
  const owenFunc = () => {setReply("ASKS A LOT OF QUESTIONS.")};
  const garretFunc = () => {setReply("A POWERFUL SPIRIT, THAT ONE.")};
  const deconFunc = () => {setReply("AN... INTERESTING ONE.")};

  const helloFunc = () => {setReply("HELLO.")};
  const byeFunc = () => {
    setReply("GOODBYE.");
    setbye(true);
  };

  const wontFindFunc = () => {setReply("YOU WON'T FIND IT HERE.")};
  const impossibleFunc = () => {setReply("IMPOSSIBLE.")};
  const niceFunc = () => {setReply("WOULDN'T THAT BE NICE?")};

  const tetoFunc = () => {setReply("THE RED ONE.")};
  const reiFunc = () => {setReply("THE ORANGE ONE.")};
  const neruFunc = () => {setReply("THE YELLOW ONE.")};
  const gumiFunc = () => {setReply("THE GREEN ONE.")};
  const mikuFunc = () => {setReply("THE BLUE ONE.")};
  const defokoFunc = () => {setReply("THE PURPLE ONE.")};
  
  const sundayFunc = () => {setReply("A LITTLE ANGEL.")};
  const maryFunc = () => {setReply("POOR THING...")};

  const nyokoFunc = () => {setReply("THE ONE AND THE WHOLE.")};
  const heroFunc = () => {setReply("STILL HASN'T LET GO.")};
  const cassieFunc = () => {setReply("OF DESERT RAINE.")};
  const holtzFunc = () => {setReply("OLDER THAN HE LOOKS.")};
  const myronFunc = () => {setReply("HE DOES HIS BEST.")};
  const kittyFunc = () => {setReply("CUTE.")};
  const quietFunc = () => {setReply("WHEN THE SEA DROWNS THE WORLD...")};


  const inputMap = {
    "GNARL": gnarlFunc,
    "VS": vsFunc,

    "YOU": flatterFunc,
    "WHO": meFunc,
    "FRIEND": friendFunc,
    "IAN": nameFunc,
    "OWEN": owenFunc,
    "GARRETT": garretFunc,
    "DECON": deconFunc,

    "HELLO": helloFunc,
    "HI": helloFunc,
    "SUP": helloFunc,
    "HEY": helloFunc,
    "BYE": byeFunc,
    "GOODBYE": byeFunc,

    "POWER": wontFindFunc,
    "MONEY": wontFindFunc,
    "LOVE": niceFunc,
    "HAPPINESS": wontFindFunc,
    "PEACE": wontFindFunc,
    "FREEDOM": impossibleFunc,

    "TETO": tetoFunc,
    "REI": reiFunc,
    "NERU": neruFunc,
    "GUMI": gumiFunc,
    "MIKU": mikuFunc,
    "DEFOKO": defokoFunc,

    "SUNDAY": sundayFunc,
    "MARY": maryFunc,

    "NYOKO": nyokoFunc,
    "CASSANDRA": cassieFunc,
    "CASSIE": cassieFunc,
    "HERO": heroFunc,
    "HIRO": heroFunc,
    "MYRON": myronFunc,
    "HOLTZ": holtzFunc,
    "KITTY": kittyFunc,
    "KAAI": kittyFunc,
    "FRANK": kittyFunc,
    "QUIET": quietFunc
  }

  const addCharacter = (char) => {
    setInput(prevText => prevText + char);
    if (bye == true) {
      setReply("...OR NOT?");
      setbye(false);
    }
  };

  const delCharacters = () => {
    setReply("BEGIN AGAIN.");
    setInput("");
  };

  
  const evalCharacters = () => {
    const func = inputMap[input];
    if (func == null) {
      defaultFunc();
    } else {
      func();
    }
    setInput("");
  };

  return (
    <>
      <div className="central">
        <ShakeText mag={5} speed_factor={0.0005} seed={39}>{reply}</ShakeText>
      </div>
      <div className="central">
        <ShakeText mag={2} speed_factor={0.0008} seed={40}>{input}</ShakeText>
      </div>
      <br/><br/><br/><br/><br/>
      <Keyboard width={2000} height={400} onKey={addCharacter}/>
      <div className="buttons">
        <button type="button" className="kbbutton" style={{'--offset': '-0s'}} onClick={delCharacters}>
          <img src={moon} alt="Moon" className="image-button"/>
        </button>
        <button type="button" className="kbbutton" style={{'--offset': '-3s'}} onClick={evalCharacters}>
          <img src={sun} alt="Sun" className="image-button"/>
        </button>
      </div>
    </>
  );
}
