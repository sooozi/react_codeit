// 필요한 컴포넌트 및 함수들을 가져옵니다.
import HandIcon from './HandIcon'; // 손 모양 아이콘을 표시하는 컴포넌트
import { useState } from 'react'; // 컴포넌트 상태를 관리하기 위한 useState 훅을 가져옵니다.
import HandButton from './HandButton'; // 손 모양 선택 버튼 컴포넌트
import Button from './Button'; // 일반적인 버튼 컴포넌트
import Dice from './Dice'; // 주사위를 표시하는 컴포넌트
import { compareHand, generateRandomHand } from './utils'; // 게임 로직을 위한 유틸리티 함수들을 가져옵니다.


// 사용자의 손 모양 초기값을 정의합니다.
const INITIAL_VALUE = 'rock';


// 게임 결과를 결정하는 함수를 정의합니다 (승, 패, 무승부) - 가위 바위 보

function getResult(me, other) {
    const comparison = compareHand(me, other);
    if (comparison > 0) return '승리'; // 승리
    if (comparison < 0) return '패배'; // 패배
    return '무승부'; // 무승부
}

// 1부터 n 사이의 난수를 생성하는 함수를 정의합니다. - 주사위
// function random(n) {
//     return Math.ceil(Math.random() * n);
// }


// 메인 App 컴포넌트를 정의합니다.
function Board({name, color, gameHistory}) {
    // 사용자의 손 모양과 컴퓨터의 손 모양을 관리하기 위한 상태 변수를 정의합니다.
    const [hand, setHand] = useState(INITIAL_VALUE);
    const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
    const [gameHistory02, setGameHistory02] = useState([]);  //빈 배열을 초깃값으로 갖는 gameHistory라는 State를 제작합니다.
    const [score, setScore] = useState(0); // - 가위 바위 보
    const [otherScore, setOtherScore] = useState(0); // - 가위 바위 보
    const [bet, setBet] = useState(1); // - 가위 바위 보

    const num = gameHistory[gameHistory.length -1 ] || 1;
    const sum = gameHistory.reduce((a, b) => a + b, 0);

    // 손 모양 선택 버튼 클릭 이벤트를 처리하는 함수를 정의합니다. - 가위 바위 보
    const handleButtonClick = (nextHand) => {  
        // 컴퓨터를 위한 무작위 손 모양을 생성합니다.
        const nextOtherHand = generateRandomHand();
        //승부 결과를 저장합니다.
        const nextHistoryItem = getResult(nextHand, nextOtherHand);
        const comparison = compareHand(nextHand, nextOtherHand);
        setHand(nextHand);
        setOtherHand(nextOtherHand);

        // 선택한 손 모양으로 상태 변수를 업데이트합니다.
        // setHand(nextHand);
        // setOtherHand(nextOtherHand);
        //setter함수로 새 값이 추가된 gameHistory State를 전달해줍니다.
        setGameHistory02([...gameHistory02, nextHistoryItem]);
        if (comparison > 0) setScore(score + bet);
        if (comparison < 0) setOtherScore(otherScore + bet);
    };

    //가위 바위 보 초기화
    const handleClearClick02 = () => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        // gameHistory를 비워줍니다.
        setGameHistory02([]);
        setScore(0);
        setOtherScore(0);
        setBet(1);
    };

    const handleBetChange = (e) => {
        // 여기에 코드를 작성하세요
        const nextBet = parseInt(e.target.value);
        setBet(nextBet)
    };





    // const [num, setNum] = useState(1);
    // const [sum, setSum] = useState(0);
    // const [gameHistory, setGameHistory] = useState([]);  //빈 배열을 초깃값으로 갖는 gameHistory라는 State를 제작합니다.

    // 주사위 던지기 버튼 클릭 이벤트를 처리하는 함수를 정의합니다.
    // const handleRollClick = () => {
    //     // 1에서 6까지의 난수를 생성하여 상태 변수를 업데이트합니다.
    //     const nextNum = random(6);
    //     setNum(nextNum);
    //     //던지기 버튼 클릭 시 새로운 주사위 숫잣값이 setState에 더해집니다.
    //     setSum(sum + nextNum);
    //     //setter함수로 새 값이 추가된 gameHistory State를 전달해줍니다.
    //     setGameHistory([...gameHistory, nextNum]);
    // }
    // // 주사위 초기화 버튼 클릭 이벤트를 처리하는 함수를 정의합니다.
    // const handleClearClick = () => {
    //     // 주사위 상태 변수를 초기값으로 리셋합니다.
    //     setNum(1);
    //     setSum(0);
    //     setGameHistory([]);
    // }

    return (
        <div className='dice_box'>
            <div>
                <div>
                    <h3>{name}</h3>
                    <Dice color={color} num={num} />
                    <h3>총점</h3>
                    <p>{sum}</p>
                    <h3>기록</h3>
                    <p>{gameHistory.join(', ')}</p>
                </div>
            </div>
        </div>
    );
}


//해당 컴포넌트를 다른 파일에서도 사용할 수 있도록 export
export default Board;
