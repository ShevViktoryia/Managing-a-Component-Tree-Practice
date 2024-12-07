import React from "react";

type InputAreaPropsType = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addItem: () => void;
  inputText: string;
};

function InputArea(props: InputAreaPropsType) {
  return (
    <div className="form">
      <input
        onChange={(event) => props.handleChange(event)}
        type="text"
        value={props.inputText}
      />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
