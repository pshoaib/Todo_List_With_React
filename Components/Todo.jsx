import React from 'react'
import { useState } from 'react'
import { AddTodo } from './AddTodo'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'


//main Component all will be present here
export const Todo = () => {
  const [todo , setTodo] = useState([])
  
  const handleTodo =(text)=>
  {
    setTodo([...todo,{id:Date.now(),title:text,status:false}])
  }
  console.log(todo)

  const handleToggle =(id)=>
  {
    // console.log(`shokmkaib ${id}`)  
    let updatedData = todo.map((elem) =>
    elem.id === id
    ?
    {
      ...elem,
      status : !elem.status
    }
    :elem
    )
    setTodo(updatedData)
  }

  const handleDelete =(id)=>
  {
    const updatedData = todo.filter((elem) => elem.id !== id)
    setTodo(updatedData)
  }

    return (
    <div>
        <AddTodo handleTodo={handleTodo} />/
                {/* " handleDelete={handleDelete}"                                */}
        <TodoList data={todo} handleToggle={handleToggle}  handleDelete={handleDelete} />

         
        
    </div>
  )
}
