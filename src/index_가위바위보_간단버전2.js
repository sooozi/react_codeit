import ReactDOM from 'react-dom/client';
// import App from './App';

// 가위바위보 이기는 공식
const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper : "rock",
};

//승부 결과 도출
function getResult(left, right) {
  if(WINS[left] === right) return '승리';
  else if(left === WINS[right]) return '패배';
  return '무승부';
}

//버튼 클릭 시
function handleClick() {
  console.log('가위바위보!');
}

//나와 상대방 수 결정
const me = 'rock';
const other = 'scissor';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = App.createRoot(document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementByID('root'));

root.render(
  <div>
    <h1 id="title">가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button>
  </div>
);

//************** 가위바위보 - 간단버전(1) */
//div 없이 코드를 넣었을 때 오류 발생!
//해결방법 : https://heytech.tistory.com/282