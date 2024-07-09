import HandIcon from './HandIcon';

//아이콘이 그려진 버튼을 클릭하면 콘솔에 각각 rock, scissor, paper 가 출력되는 버튼
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
