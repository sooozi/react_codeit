// 필요한 컴포넌트 및 함수들을 가져옵니다.
import HandIcon from './HandIcon'; // 손 모양 아이콘을 표시하는 컴포넌트
import { useState } from 'react'; // 컴포넌트 상태를 관리하기 위한 useState 훅을 가져옵니다.
import HandButton from './HandButton'; // 손 모양 선택 버튼 컴포넌트
import Button from './Button'; // 일반적인 버튼 컴포넌트
import Dice from './Dice'; // 주사위를 표시하는 컴포넌트
import { compareHand, generateRandomHand } from './utils'; // 게임 로직을 위한 유틸리티 함수들을 가져옵니다.


// 사용자의 손 모양 초기값을 정의합니다.
const INITIAL_VALUE = 'rock';


// 게임 결과를 결정하는 함수를 정의합니다 (승, 패, 무승부)
function getResult(me, other) {
    const comparison = compareHand(me, other);
    if (comparison > 0) return '승리'; // 승리
    if (comparison < 0) return '패배'; // 패배
    return '무승부'; // 무승부
}

// 1부터 n 사이의 난수를 생성하는 함수를 정의합니다.
function random(n) {
    return Math.ceil(Math.random() * n);
}


// 메인 App 컴포넌트를 정의합니다.
function App() {
    // 사용자의 손 모양과 컴퓨터의 손 모양을 관리하기 위한 상태 변수를 정의합니다.
    const [hand, setHand] = useState(INITIAL_VALUE);
    const [otherHand, setOtherHand] = useState(INITIAL_VALUE);

    // 손 모양 선택 버튼 클릭 이벤트를 처리하는 함수를 정의합니다.
    const handleButtonClick = (nextHand) => {  
        // 컴퓨터를 위한 무작위 손 모양을 생성합니다.
        const nextOtherHand = generateRandomHand();
        // 선택한 손 모양으로 상태 변수를 업데이트합니다.
        setHand(nextHand);
        setOtherHand(nextOtherHand);
    };

    //가위 바위 보 초기화
    const handleClearClick02 = () => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
    };

    const [num, setNum] = useState(1);

    // 주사위 던지기 버튼 클릭 이벤트를 처리하는 함수를 정의합니다.
    const handleRollClick = () => {
        // 1에서 6까지의 난수를 생성하여 상태 변수를 업데이트합니다.
        const nextNum = random(6);
        setNum(nextNum);
    }
    // 주사위 초기화 버튼 클릭 이벤트를 처리하는 함수를 정의합니다.
    const handleClearClick = () => {
        // 주사위 상태 변수를 초기값으로 리셋합니다.
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
                    <Button onClick={handleClearClick02}>처음부터</Button>
                    <p>{getResult(hand, otherHand)}</p>
                </div>
                <div>
                    <HandIcon value={hand} />
                    VS
                    <HandIcon value={otherHand} />
                </div>
                <div>
                    <HandButton value="rock" onClick={handleButtonClick} />  
                    <HandButton value="scissor" onClick={handleButtonClick} />
                    <HandButton value="paper" onClick={handleButtonClick} />
                </div>
            </div>
        </div>
    );
}


//해당 컴포넌트를 다른 파일에서도 사용할 수 있도록 export
export default App;
