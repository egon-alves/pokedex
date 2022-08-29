
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';





export const PopUpPokemon = (props)=> {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>X</span>
          {props.content}
        </div>
      </div>
    );
  };
  
  
 