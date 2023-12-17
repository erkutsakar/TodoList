import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';


function App() {

const [counter, setCounter] = useState(0);

useEffect( () => {
  console.log(counter)
}, [counter] )


  return (
    <div className="App">
  <div>{counter}</div>
     <button onClick={ () => setCounter(prevCounter => prevCounter  + 1 ) }>increment</button>
<Button>Hello</Button>
    </div>
  );
}

export default App;
