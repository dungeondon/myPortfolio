import { useState } from 'react'
import kvsLogo from '/kvs.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={kvsLogo} className="logo" alt="KVS logo" />
        </a>
        
      </div>
      <div>
        <h1>Connect</h1>
        <h3>Email: <a href="mailto:iamvenkateshkvs@gmail.com">iamvenkateshkvs@gmail.com</a></h3>
        
        <h4>Call: +91 8686 2345 30</h4>
      </div>
    </>
  )
}

export default App
