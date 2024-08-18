import { useContext, useRef, useState } from "react";
// import { TodoDispatchContext } from "../App";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  // const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      {/* <h3>새로운 Todo 작성하기🖊️</h3> */}

      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
      ></input>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
