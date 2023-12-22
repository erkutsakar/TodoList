
import {Form, Button} from 'react-bootstrap';
import {  useState } from 'react';
import  {ReactComponent as DeleteIcon} from './assets/deleteicon.svg' 
import  {ReactComponent as SaveIcon} from './assets/saveicon.svg' 
import  {ReactComponent as EditIcon} from './assets/editicon.svg' 
import { v4 as uuidv4 } from 'uuid';

function App() {

const [todoList, setTodoList] = useState([])
const [todo, setTodo] = useState('')
const [newTodo, setNewTodo] = useState('')

const addTodo = () =>
{
  setTodoList(prevTodoList => [...prevTodoList, {id:uuidv4(), todo:newTodo, isEditable: false, isCompleted: false}])
  setNewTodo('')
}

const completeTodo = (id) =>
{
  setTodoList(prevTodoList => prevTodoList.map(todoitem => todoitem.id === id ? {...todoitem, isCompleted: !todoitem.isCompleted} : todoitem ))
}

const editTodo = (id, oldTodo) =>
{
  setTodoList(prevTodoList => prevTodoList.map(todoitem => todoitem.id === id ? {...todoitem, isEditable: !todoitem.isEditable} : todoitem))  
  setTodo(oldTodo);
}

const saveTodo = (id) =>
{
  setTodoList(prevTodoList => prevTodoList.map(todoitem => todoitem.id === id ? {...todoitem, isEditable: !todoitem.isEditable, todo:todo} : todoitem ))

}
const deleteTodo = (id) =>
{
  setTodoList(prevTodoList => prevTodoList.filter(todoitem => todoitem.id !== id ))

}

// test 2

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
 
      <h1 className="mt-5">Todo List</h1>
      <div className='d-flex w-50'>  
        <Form.Control
          placeholder="Todo Input"  
          value= {newTodo}  
          onChange={(e) => setNewTodo(e.target.value) }      
        />
         <Button className='ms-5' onClick={() => {addTodo()} }>Add Todo</Button>
         </div>

         <div className='mt-5'>
          {
            todoList.map(
              (todoitem) => 
                  <div key={todoitem.id} className="d-flex justify-content-between">
                    <div className='d-flex w-75'>
                     <Form.Check
                        type="checkbox"
                        className="me-2" 
                        value= {todoitem.isCompleted}
                        onChange={() =>completeTodo(todoitem.id)}
                        />

                        {
                         !todoitem.isEditable ?   
                        <label className={`${todoitem.isCompleted ? 'text-decoration-line-through': ''} fw-bold` }>
                        {todoitem.todo}
                        </label>
                         :
                         <Form.Control
                          value= {todo}  
                          onChange={(e) => setTodo(e.target.value) }      
                        />

                        }

                        {
                           !todoitem.isEditable ? 
                        <div><EditIcon width={25} height={25} style={({cursor:'pointer'})} className='me-2 ms-5' onClick={() => editTodo(todoitem.id, todoitem.todo) }/></div>
                         :
                        <div><SaveIcon width={25} height={25} style={({cursor:'pointer'})} className='me-2' onClick={() => saveTodo(todoitem.id) }  /></div>
                        }
                        <div><DeleteIcon width={25} height={25} style={({cursor:'pointer'})} className='me-2' onClick={() => deleteTodo(todoitem.id) }  /></div>

                        
                        
                    </div>

                    </div>
                    
            )           
          }
         </div>
    </div>
  

  
  )
  }

export default App;
