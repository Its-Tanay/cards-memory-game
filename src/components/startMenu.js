import React, { useState } from 'react';
import btnImg from '../assets/omnitrix.png';

export default function StartMenu({ handleClick }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);

    setTimeout(() => {
      handleClick();
    }, 1000); 
  };

  return (
    <div className="start-menu">
      <button
        className={`start-button ${buttonClicked ? 'spin' : ''}`}
        onClick={buttonClicked ? null : handleButtonClick}
      >
        <img src={btnImg} alt="" />
      </button>
    </div>
  );
}
