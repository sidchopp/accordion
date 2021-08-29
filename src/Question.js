import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {

  // state for toggle functionality

  const [showInfo, setShowInfo] = useState(false);

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      {/* onclick change/show Opposite  state as we have used not operator */}
      <button className='btn' onClick={() => { setShowInfo(!showInfo) }} >
        {/* To change the icon with each click depending on state */}
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </header>
    {/* Iff only showInfo is true, only then show info, use AND operator */}
    {showInfo && <p>{info}</p>}

  </article>;
};

export default Question;
