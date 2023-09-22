import HandIcon from './HandIcon';
// import Dice from './Dice';

function App() {
  return (
    <div>
      <HandIcon value="rock" />
      <HandIcon value="scissor" />
      <HandIcon value="paper" />
    </div>
  );
}

//해당 컴포넌트를 다른 파일에서도 사용할 수 있도록 export
export default App;