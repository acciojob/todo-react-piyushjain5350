import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData]=useState('');
  const [render,setRender]=useState([]);

  function removeFn(idx){
    // const updatedRender = [...render];
    // updatedRender.splice(idx, 1);
    // setRender(updatedRender);
    let updatedTodos=render.filter((element,index)=>{
      return idx!==index;
    })
    setRender(updatedTodos)
  }
  function handlingFn(){
    // console.log('clicked');
    // console.log(data);
    setRender((prevRender) => [...prevRender, data]);
    setData('');
  }
  return (
    <div>
      <h1>To-Do-list</h1>
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
      <button onClick={handlingFn}>Add Todo</button>
      <ul>
      {render.map((item, idx) => (
        <div key={idx}>
          <li>{item} 
          <button onClick={() => removeFn(idx)}>Remove</button></li>
        </div>
        ))
      }
      </ul>
       {/* <div>Render state: {JSON.stringify(render)}</div> */}
    </div>
  )
}

export default App
