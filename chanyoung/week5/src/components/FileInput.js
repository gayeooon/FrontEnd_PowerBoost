import { useRef } from "react";

function FileInput({ name, value, onChange }) {
  //파일 인풋 노드를 참조할 Ref 객체를 생성
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  //파일 인풋 초기화 함수
  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} ref={inputRef} />
      <button type="button" onClick={handleClearClick}>
        X
      </button>
    </div>
  );
}

export default FileInput;
