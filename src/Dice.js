import diceBlue01 from './assets/dice-blue-1.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import diceRed06 from './assets/dice-red-6.svg';

// 주사위 이미지를 색상별로 그룹화하여 객체에 저장합니다.
const DICE_IMAGES = {
  blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
  red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06]
}

// Dice 컴포넌트를 정의합니다.
function Dice({color, num}) {
  // 주어진 색상과 숫자에 해당하는 주사위 이미지의 경로를 선택합니다.
  const src = DICE_IMAGES[color][num - 1];
  // 이미지의 대체 텍스트를 설정합니다.
  const alt = `${color} ${num}`
  // 이미지를 화면에 표시합니다.
  return <img src={src} alt={alt} />;
}

export default Dice;
 