// import HandIcon from './HandIcon';
import { useState } from 'react';
import HandButton from './HandButton';
import Button from './Button';
import Dice from './Dice';

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const handleClick = (value) => console.log(value);   

    const [num, setNum] = useState(1);

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
    }

    const handleClearClick = () => {
        setNum(1);
    }

    return (
        <div>
            <div className='dice_wrap'>
                <h2>주사위 게임</h2>
                <div>
                    <Button onClick={handleRollClick}>던지기</Button>
                    <Button onClick={handleClearClick}>처음부터</Button>
                </div>
                <div>
                    <Dice color="red" num={num} />
                </div>
            </div>

            <div className='rsp_wrap'>
                <h2>가위바위보 게임</h2>
                 <div>
                    <Button onClick={handleRollClick}>던지기</Button>
                    <Button onClick={handleClearClick}>처음부터</Button>
                </div>
                <div>
                    <HandButton value="rock" onClick={handleClick} />  
                    <HandButton value="scissor" onClick={handleClick} />
                    <HandButton value="paper" onClick={handleClick} />
                </div>
            </div>
        </div>
    );
}


//해당 컴포넌트를 다른 파일에서도 사용할 수 있도록 export
export default App;
