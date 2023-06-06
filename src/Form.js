import React from 'react'

const Form = (props) => {
    const {setInput,setTodo,input,todo,cmt,cmtInput}=props

    const onInputChange= (e)=>{
        setInput(e.target.value)
        console.log("cvhange added")

       
    }
    const submitHandler=(e)=>{
        e.preventDefault()
       setTodo([...todo,{id:Math.random()*100,todo:input,comment:cmt}])
       console.log(todo)
    }
    // const handleTodoAdd=(e)=>{
    //     e.preventDefault()
    //     setTodo([...todo,{id: new Date.now(),task:input}])
    //     console.log(todo)
    //     console.log("todo added")
    // }
   
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder='enter todo' onChange={onInputChange}/>
        <br/>
       <textarea placeholder='enter comment' onChange={(e)=>{cmtInput(e.target.value)}}   />
       <br/>
        <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default Form