import React from 'react';
import './button.css';

export default function Button(props) {
  const {size="medium", label, theme="kakao"} = props;

  const handleSubmit = () => {
    alert("Hey!")
  }

  return (
    <button
      type="button"
      className={`button ${size} ${theme}`}
      onClick={handleSubmit}
    >
      {label}
    </button>
  )
}
