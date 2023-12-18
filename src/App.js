
import {Form, Button} from 'react-bootstrap';

import { useEffect, useState } from 'react';

function App() {

const [todoList, setTodoList] = useState([])
const [todo, setTodo] = useState('')

const addTodo = () =>
{
  setTodoList(prevTodoList => [...prevTodoList, todo])
  setTodo('')
}

useEffect( () => {console.log(todoList)}, [todoList])



  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
 
      <h1 className="mt-5">Todo List</h1>
      <div className='d-flex w-50'>  
        <Form.Control
          placeholder="Todo Input"  
          value= {todo}  
          onChange={(e) => setTodo(e.target.value) }      
        />
         <Button className='ms-5' onClick={() => {addTodo()} }>Add Todo</Button>
         </div>

         <div>
          Todolar
         </div>
    </div>
  

  
  );
  }

export default App;
