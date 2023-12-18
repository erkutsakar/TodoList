
import {Form, Button} from 'react-bootstrap';
import React, { useEffect } from 'react'; 
import { useState } from 'react';

function App() {


const [todo, setTodo] = useState('')
useEffect(
  () =>{console.log(todo)},[todo]
)

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
 
      <h1 className="mt-5">Todo List</h1>
      <div className='d-flex w-50'>  
        <Form.Control
          placeholder="Todo Input"  
          value= {todo}  
          onChange={(e) => setTodo(e.target.value) }      
        />
         <Button className='ms-5' onClick={() => console.log({todo})}>Add Todo</Button>
         </div>
    </div>
  );
}

export default App;
