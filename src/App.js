import React ,{useState} from 'react';
import Form from './Form';
import './App.css';
//import Comment from './components/comments/Index';

function App() {
  const [input,setInput]=useState('')
  const [cmt,cmtInput]=useState('')
  const [todo,setTodo]=useState([])
  return (
    <div className="App">
      <h1>Comments</h1>
      <Form 
       setInput={setInput} 
       setTodo={setTodo}
       input={input}
       todo={todo}
       cmt={cmt}
       cmtInput={cmtInput}
       />

       {
        todo.map((item)=>{
          const {todo,id,comment}=item
          return <div>
            <h1 key={id}>{todo}</h1>
            <h1 key={id}>{comment}</h1>
            </div>
        })
       }
      {/* <Comment/> */}
    </div>
  );
}

export default App;
