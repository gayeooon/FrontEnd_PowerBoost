import "./Button.css";

function Button({ children, onClick }) {
  return (
    <div className="App-reset" onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
