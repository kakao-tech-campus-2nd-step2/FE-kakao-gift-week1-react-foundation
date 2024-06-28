import React, {useState} from "react";
import "./input.css"

export default function Input(props) {

  // const {size = "medium"} = props;
  const { isDisabled='false', size='medium', placeholder, isInvalid='false'} = props;

  const [title, setTitle] = useState('');

  return (
    <div className='inputBox'>
      <input className = {`input ${size} ${isInvalid}`} type='text' value={title} disabled={isDisabled} placeholder={placeholder} onChange={(e) => {
        setTitle(e.target.value);
      }}  />
    </div>
  );
}
