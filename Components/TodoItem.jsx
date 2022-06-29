import React from 'react'
import { useState } from 'react'

export const TodoItem = ({ id , title , status , handleToggle , handleDelete}) => {
   
    return (
    <div style={{display:'flex',padding:'1rem',border:'1rem',gap:'1rem'}}>
        <h3>{title}</h3>
        <h4>{status ? "Done":"Not Done"}</h4>
            {/* onClick={()=> handleDelete(id)} */}
        <button onClick={()=> handleToggle(id)} >Toggle</button>
        <button onClick={()=> handleDelete(id)}>Delete</button>
    </div>
  )
}
