import HandIcon from './HandIcon';

// CSS 파일로 스타일을 적용해 주세요
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
