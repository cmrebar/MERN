import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      value: todo,
      completed: false
    }
    setTodos([...todos, newTodo]);
    setTodo('');
  };
  
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  
  const toggleCompleted = (index) => {
    const updatedTodos = todos.map((item, i) => {
      if (i === index) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(updatedTodos);
  };
  
  const handleTodoDelete = (index) => {
    const filteredTodos = todos.filter((item, i) => {
      return i !== index;
    });
    setTodos(filteredTodos);
  };

  return (
    <div className="App" style={{ textAlign: 'center'}}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
      <form className='form' onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='value'>Todo</label>
          <input type='text' className='form-control' placeholder='Enter todo' name='value' value={todo} onChange={changeHandler} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
      {
    todos.map((item, index) => {
      const todoClasses = [];

      if (item.completed) {
        todoClasses.push('slash');
      };
      return(
        <div key={index}>
          <p className={todoClasses}>{item.value}</p>
          <input checked={item.completed} type='checkbox' onChange={(event) => {
            toggleCompleted(index);
          }}  />
          <button onClick={(event) => {
            handleTodoDelete(index);
          }} >Remove</button>
        </div>
    )})}
            
            
          </div>
  );
}

export default App;
