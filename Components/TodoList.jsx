import React from 'react'
import { TodoItem } from './TodoItem'
export const TodoList = ({data, handleToggle ,handleDelete}) => {
 
  return (
    <div>
      {
         data.map((elem)=>
        (
          <TodoItem key={elem.id}
                    id={elem.id}
                    title={elem.title}
                    status={elem.status} 
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                    
              
          />

        ))
      }
    </div>
  )
}
