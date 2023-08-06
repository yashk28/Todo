import React, {useRef} from 'react'
import './ModalValue.css';

function Modal({isOpen, onClose}) {
    // const modalRef = useRef();
  if (!isOpen) return null;
  return (
    <div className='modalPanel'>Modal</div>
  )
}

export default Modal