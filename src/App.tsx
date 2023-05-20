import { useEffect, useState } from "react";

import * as C from './App.styled';
import './App.css';
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";

const App = () => {
  const [useChar2, setUseChar2] = useState(false);
  
  const char = useCharacter();
  const char2 = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
        char.moveLeft();
      break;
      case 'KeyD':
        char.moveRight();
      break;
      case 'KeyW':
        char.moveUp();
      break;
      case 'KeyS':
        char.moveDown();
      break;
    }

    let controls2 = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
    for (let i = 0; i < controls2.length; i++) {
      if (e.code === controls2[i]) {
        useChar2 ? setUseChar2(useChar2) : setUseChar2(true);
        switch (e.code) {
          case 'ArrowLeft':
            char2.moveLeft();
          break;
          case 'ArrowRight':
            char2.moveRight();
          break;
          case 'ArrowUp':
            char2.moveUp();
          break;
          case 'ArrowDown':
            char2.moveDown();
          break;
        }
      }
    }
  }

  return (
    <C.Container>
      <C.ContainerMap>
        <C.Map>
          <Character 
            x={char.x} 
            y={char.y} 
            side={char.side} 
            style={false}
          /> {/** 480x480 = 16x16, ou seja, x={0-15} */}
          <Character 
            x={char2.x} 
            y={char2.y} 
            side={char2.side}
            style={useChar2} 
          />
        </C.Map>
      </C.ContainerMap>
        <C.ContainerControls>
          <C.Controls>
            <C.ControllersX>
              <button className="x1" onClick={() => char2.moveLeft()}>⬅</button>
              <button className="x2" onClick={() => char2.moveRight()}>➡</button>
            </C.ControllersX>
            <C.ControllersY>
              <button className="y1" onClick={()=>char2.moveUp()}>⬆</button>
              <button className="y2" onClick={()=>char2.moveDown()}>⬇</button>
            </C.ControllersY>
          </C.Controls>
        </C.ContainerControls>
    </C.Container>
  );
}

export default App;