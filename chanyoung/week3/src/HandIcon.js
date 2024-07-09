import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

//객체 생성
const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

//Prop 의 값에 따라 가위, 바위, 보 이미지를 보여주기
function HandIcon({ value }) {
  const src = IMAGES[value];
  return <img src={src} alt={value} />;
}

export default HandIcon;
