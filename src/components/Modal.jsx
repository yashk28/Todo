import React, {useRef} from 'react'
import './ModalValue.css';
import { useState } from 'react';

function Modal({isOpen, onClose}) {
    // const modalRef = useRef();
  const [inputField, setInputField] = useState('')
  if (!isOpen) return null;

  const handleOnChange = (evt) => {
    setInputField(evt.target.value);
  }
  return (
    <div className='modalPanel'>
      Title :
    <input className='inputField' onChange={handleOnChange} value={inputField}>
    </input>
    <button className='addToModal'>Add</button>
    <button className='closeBtn'>close</button>
    </div>
  )
}

export default Modal