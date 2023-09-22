import Board from './Board'
import Button from './Button';
import { useState } from 'react';

function random(n) {
    return Math.ceil(Math.random() * n);
}

// 메인 App 컴포넌트를 정의합니다.
function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);  //빈 배열을 초깃값으로 갖는 gameHistory라는 State를 제작합니다.

    const [otherNum, setOtherNum] = useState(1);
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtherGameHistory] = useState([]);  //빈 배열을 초깃값으로 갖는 gameHistory라는 State를 제작합니다.

    const handleRollClick = () => {
        const nextNum = random(6);
        const nextOtherNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
        setOtherNum(nextOtherNum);
        setOtherSum(otherSum + nextOtherNum);
        setOtherGameHistory([...otherGameHistory, nextOtherNum]);
    }

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
        setOtherNum(1);
        setOtherSum(0);
        setOtherGameHistory([]);
    }

    return (
        <div>
             <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory}/>
                <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
            </div>
        </div>
    );
}


//해당 컴포넌트를 다른 파일에서도 사용할 수 있도록 export
export default App;
