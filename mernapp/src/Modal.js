import React from 'react'
import  ReactDOM  from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'rgb(96.1, 96.1, 96.1)',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    height: '90%',
    width: '90%'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(0,0,0, .7)',
    zIndex: 1000
}


export default function Modal({children, onClose}) {
  return  ReactDOM.createPortal(
    <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
            <button className='btn bg-danger fs-4' style={{marginLeft: "90%", marginTop: "-35px"}} onClick={onClose}>X</button>
        {children}
        </div>  
    </>,
    document.getElementById('cart-root')
  )
}