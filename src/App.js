
import {Form, Button} from 'react-bootstrap';

function App() {





  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
 
      <h1 className="mt-5">Todo List</h1>
      <div className='d-flex w-60'>  
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
         <Button>Add Todo</Button>
         </div>
    </div>
  );
}

export default App;
