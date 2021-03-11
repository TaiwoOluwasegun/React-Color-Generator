import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [errorr, setError] = useState(false)
  const [list,setList] = useState([''])

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('hello')
  }

  return (
    <> 
    <section className='container'>
      <h3>Color Generator</h3>

      <form onSubmit={handleSubmit}>
        <input value={color} onChange={(e)=>{setColor(e.target.value)}} placeholder='enter a color code' type='text'></input>

        <button className='btn' type='button'> Submit </button>

      </form>

    </section>
    <section className='colors'>
      <h4>Colors Goes Here</h4>

    </section>
    
    
    </>
  )
}

export default App
