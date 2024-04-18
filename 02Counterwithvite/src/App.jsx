import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let counter = 5
  let addvalue = ()=>{
    console.log(`working ${Math.random()}`);
    counter = counter + 1
    console.log(counter);
  }

  return (
    <>
    <h1>Hello, world</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addvalue}>Add value</button><br /><br />
    <button>remove value</button>
    </>
  )
}

export default App
