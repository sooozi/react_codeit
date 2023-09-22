import Board from './Board'
import Button from './Button';
import { useState } from 'react';
import './App.css'

function random(n) {
    return Math.ceil(Math.random() * n);
}


function App() {
    const [myHistory, setMyHistory] = useState([]); 
    const [otherHistory, setOtherHistory] = useState([]); 

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    }

    const handleClearClick = () => {
        setMyHistory([]);
        setOtherHistory([]);
    }

    return (
        <div className='App'>
            <h1>주사위 게임</h1>
             <div>
                <Button className='App-button' color="blue" onClick={handleRollClick}>던지기</Button>
                <Button className='App-button' color="red" onClick={handleClearClick}>처음부터</Button>
            </div>
            <div className='dice_wrap'>
                <Board name="나" color="blue" gameHistory={myHistory}/>
                <Board name="상대" color="red" gameHistory={otherHistory} />
            </div>
        </div>

        
    );
}


//해당 컴포넌트를 다른 파일에서도 사용할 수 있도록 export
export default App;
