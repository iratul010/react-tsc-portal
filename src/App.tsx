import { useState } from 'react'
 
import './App.css'
import Modal from './Modal/Modal'

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className='app'>
      <h2>Simple Modal Create!</h2>
      <button onClick={()=>setShow(!show)}>click here!</button>
      <Modal show={show} closeModal={()=>setShow(!show)}/>
    </div>
  )
}

export default App
