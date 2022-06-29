import React from 'react'
import { useState } from 'react'

export const AddTodo = ({handleTodo}) => {
    const [text , setText] = useState("")
  
    const handleChange =(e)=>
  {
   setText(e.target.value)
  //  console.log(e.target.value)
  }
  
    return (
    <div> 
        <input value={text}
                placeholder="Add Todo"
                onChange={handleChange} />
    <button onClick={()=>handleTodo(text)}>Add</button>
  </div>
  )
}
