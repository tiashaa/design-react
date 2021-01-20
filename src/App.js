import Button from 'react-bootstrap/Button'
import Modal from 'react-modal/lib/components/Modal';
import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Form'
import './App.css'



function App () {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className='App'>
      <button onClick={() => setModalIsOpen(true)}>Click Here To Enter</button>
      <img src='/Image1/b2.jpg'/>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'grey'
          },
          content: {
            color: 'orange'
          }
        }}
        
      >
        
        <div><Form/></div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Log In</button>
        </div>
      </Modal>
    </div>
  )
}

export default App