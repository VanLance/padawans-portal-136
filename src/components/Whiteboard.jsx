import { useState } from 'react'

import Container from 'react-bootstrap/Container'

export default function Whiteboard() {
    
    const [ performingStudent, setPerformingStudent ] = useState('brandt')

    const students = [
        'parker',
        'zakaria',
        'justin',
        'mike',
        'catrina',
        'cameron',
        'emiliano', 
        'johnny'
    ]
    
    function randomStudent(){
        setPerformingStudent( students[Math.floor(Math.random() * students.length)] )
    }

  return (
    <Container>
        <h3>Todays Whiteboard</h3>
        <p>Student: {performingStudent}</p>
        <button onClick={randomStudent}>Spin The Wheel</button>
    </Container>
  )

}
