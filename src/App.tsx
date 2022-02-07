import { useEffect } from "react";

import * as C from './App.styled';
import './App.css';
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";

const App = () => {
  
  const char = useCharacter();
  const char2 = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

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

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} /> {/** 480x480 = 16x16, ou seja, x={0-15} */}
        <Character x={char2.x} y={char2.y} side={char2.side} />
      </C.Map>
        <C.Controls>
          <C.ControllersX>
            <button className="C--X x1" onClick={()=>char2.moveLeft()}>⬅</button>
            <button className="C--X x2" onClick={()=>char2.moveRight()}>➡</button>
          </C.ControllersX>
          <C.ControllersY>
            <button className="C--Y y1" onClick={()=>char2.moveUp()}>⬆</button>
            <button className="C--Y y2" onClick={()=>char2.moveDown()}>⬇</button>
          </C.ControllersY>
        </C.Controls>
    </C.Container>
  );
}

export default App;