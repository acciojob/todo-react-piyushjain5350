// import React ,{useState} from "react";
// import './../styles/App.css';

// const App = () => {
//   const [data,setData]=useState('');
//   const [render,setRender]=useState([]);

//   function removeFn(idx){
//     const updatedRender = [...render];
//     updatedRender.splice(idx, 1);
//     setRender(updatedRender);
//   }
//   function handlingFn(){
//     // console.log('clicked');
//     // console.log(data);
//     setRender((prevRender) => [...prevRender, data]);
//     setData('');
//   }
//   return (
//     <div>
//       <h1>To-Do-list</h1>
//       <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
//       <button onClick={handlingFn}>Add Todo</button>
//       <ul>
//       {render.map((item, idx) => (
//         <div key={idx}>
//           <li>{item} 
//           <button onClick={() => removeFn(idx)}>Remove</button></li>
//         </div>
//         ))
//       }
//       </ul>
//        {/* <div>Render state: {JSON.stringify(render)}</div> */}
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [todos,setTodos]=useState([])
  let [newTodo,setNewTodo]=useState('')

  function addTodo(){
    if(newTodo.trim()!==''){
      setTodos([...todos,newTodo]);
      setNewTodo('');
    }
  }

  function removeTodo(i){
    let updatedTodos=todos.filter((element,index)=>{
      return i!==index;
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="main">
        {/* Do not remove the main div */}
        <h1>To-D0 List</h1>
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}  />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
        {
          todos.map((element,index)=>(
            <li key={index}>
              <div>{element}</div>
              <button onClick={()=>removeTodo(index)}></button>
            </li>
          ))
        }
        </ul>
    </div>
  )
}

export default App