import React from "react";

function InputField({ active, name, inputType, rows, onChange, value }) {
  return (
    <div className={!active ? "input-field" : "input-field active"}>
      <label className='label'>{name}</label>
      <br />
      {inputType === "input" ? (
        <input
          type='text'
          className='input'
          name={name}
          onChange={onChange}
          value={value}
        />
      ) : (
        <textarea
          type='text'
          rows={rows}
          className='input textarea'
          name={name}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
}

export default InputField;
