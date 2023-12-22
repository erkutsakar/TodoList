
import {Form, Button} from 'react-bootstrap';

import {  useState } from 'react';

function App() {

const [todoList, setTodoList] = useState([])
const [todo, setTodo] = useState('')

const addTodo = () =>
{
  setTodoList(prevTodoList => [...prevTodoList, todo])
  setTodo('')
}


// test

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

         <div className='mt-5'>
          {
            todoList.map(
              todoitem => <div key={todoitem}>{todoitem}</div>
            )           }
         </div>
    </div>
  

  
  );
  }

export default App;
