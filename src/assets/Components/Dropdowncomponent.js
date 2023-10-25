import React from 'react';
import './Dropdowncomponent.css';

const Dropdown = ({menuitemone,menuitemtwo,menuitemthree}) => {
  return (
    <div>
        <div className="dropdown">
                                    <div className='business'>Ilost for Business </div>
                                <div className="dropdown-content">
                                    <div className='itemone'>{menuitemone}</div>
                                    <div className='itemone'>{menuitemtwo}</div>
                                    <div className='itemlast'>{menuitemthree}</div>
                                </div>
                            </div>
    </div>
  )
}

export default Dropdown