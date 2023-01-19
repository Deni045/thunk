import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "./action";
import './index.css';

function App() {

  const todos = useSelector(state => state.todos)
  const loading = useSelector(state => state.loading)

  const dispatch = useDispatch()

  useEffect ( () => {
    dispatch(loadTodos())
  }, [])

  return (
    <div>
      {loading ? 'loading...' : (

         todos.map(item =>{
        return (
          <div className="box">

            <div className="user">
               {item.userId}
            </div>

            <div className="id">
               {item.id}
            </div>

            <div className="title">
              {item.title}
            </div>

            <div className="body">
              {item.body}
            </div>
           
            </div>
        )
      })
      )}
     
    </div>
  );
}

export default App;
