// import React, { useRef, useState } from "react";
// export function Todo({value,onSave}) {
//      const [todos,setTodos] = useState([]);
//      const [editMode,setEditMode] = useState(false);
//      const [inputValue,setInputValue]= useState(value);
//      const input = useRef();
//      const todoref=useRef();
//      const valref= useRef();

//     function addTodo(){
//            const todo = input.current.value;
//            if(todo){
//             setTodos((prev)=>[...prev,todo]);
//             input.current.value="";
//            }else{
//             alert("Enter something");
//            }
//     }
//    function editor(){
//     valref.current.setAttribute("contenteditable",true);
//     valref.current.focus();
//    }


//     return (<>
//         <div>
//             <div className="main" style={{ fontFamily: "Cursive", fontSize: 25, fontWeight: 500, marginLeft: 400, marginTop: 50 }}>
//                 Todo List
//                 <div className="container">
//                     <div className="inputDiv" style={{ borderRadius: 10, fontFamily: "Cursive", fontSize: 25, fontWeight: 450 }}>
//                         <input type="text" ref={input} placeholder="" style={{fontFamily:"Cursive"}}/>
//                         <button className="addButton" onClick={addTodo} style={{ fontFamily: "Cursive", marginLeft: 10, paddingLeft: 7, paddingRight: 7, paddingTop: 0, paddingBottom: 0 }}>Add</button>
//                     </div>
//                     <div className="tasksDiv"  style={{marginLeft:-10}}>
//                         <div className="taskDiv" >
        
//                         {todos.map((todo,index)=>
                        
//                             <h5 ref={todoref} key={index}>
//                                  <li>
//                             <p ref={valref} style={{display:"inline-block"}}>{todo}</p>
//                                 <button onClick={editor}>Edit</button>
//                                 <button onClick={()=>todoref.current.remove()}>Delete</button>
//                                 </li>
//                                 </h5>
                                
//                         )}

//                         </div>

//                     </div>

//                 </div>

//             </div>
//         </div>
//     </>);
// }
import React, { useEffect, useRef, useState } from "react";
const useDebounce = (inputVal) => {
  const [debouncedValue, setDebouncedValue] = useState(inputVal);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputVal);
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [inputVal]);

  return debouncedValue;
};
export function Todo({ value, onSave }) {
  const [todos, setTodos] = useState([]);
  const [inputVal, setinputVal] = useState('');
  const debounceVal = useDebounce(inputVal);

  const input = useRef();
  const todoref = useRef();
  const valref = useRef();
  function addTodo() {
    const todo = input.current.value;
    if (todo) {
      setTodos((prev) => [...prev, todo]);
      input.current.value = "";
    } else {
      alert("Enter something");
    }
  }
  function change(e) {
    setinputVal(e.target.value);
  }

  useEffect(() => {
    if (valref.current) {
        valref.current.setAttribute("contenteditable", false);
    }
  }, [debounceVal, todos]);

  function editor() {
    if (valref.current) {
        valref.current.setAttribute("contenteditable", true);
        valref.current.focus();
    }
  }
  return (
    <>
      <div>
        <div
          className="main"
          style={{
            fontFamily: "Cursive",
            fontSize: 25,
            fontWeight: 500,
            marginLeft: 400,
            marginTop: 50,
          }}
        >
          Todo List
          <div className="container">
            <div
              className="inputDiv"
              style={{
                borderRadius: 10,
                fontFamily: "Cursive",
                fontSize: 25,
                fontWeight: 450,
              }}
            >
              <input
                type="inputVal"
                ref={input}
                placeholder=""
                style={{ fontFamily: "Cursive" }}
              />
              <button
                className="addButton"
                onClick={addTodo}
                style={{
                  fontFamily: "Cursive",
                  marginLeft: 10,
                  paddingLeft: 7,
                  paddingRight: 7,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                Add
              </button>
            </div>
            <div className="tasksDiv" style={{ marginLeft: -10 }}>
              <div className="taskDiv">
                {todos.map((todo, index) => (
                  <div ref={todoref} key={index}>
                    <li>
                      <p
                        ref={valref}
                        onBlur={change}
                        contentEditable={debounceVal === todo}
                        style={{ display: "inline-block" }}
                      >
                        {todo}
                      </p>
                      <br />
                      <button onClick={editor}>Edit</button>
                      <button onClick={() => todoref.current.remove()}>
                        Delete
                      </button>
                    </li>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}