import { useState } from 'react'
import './App.css'

function App() {
  //Hooks
  const [count, setCount] = useState(0)

  let addvalue = ()=>{
    console.log(`working ${Math.random()}`);
    setCount(count + 1)
  }
  let removevalue = ()=>{
    console.log(`working ${Math.random()}`);
    setCount(count - 1)
  }

  return (
    <>
    <h1>Hello, world</h1>
    <h2>Counter Value : {count}</h2>
    <button onClick={addvalue}>Add value</button><br /><br />
    <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
