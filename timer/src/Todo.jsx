import React, { useRef, useState } from "react";
export function Todo({value,onSave}) {
     const [todos,setTodos] = useState([]);
     const [editMode,setEditMode] = useState(false);
     const [inputValue,setInputValue]= useState(value);
     const input = useRef();

    function addTodo(){
           const todo = input.current.value;
           if(todo){
            setTodos((prev)=>[...prev,todo]);
            console.log(todos);
            input.current.value="";
           }else{
            alert("Enter something");
           }
    }
    function handleSave(){
     onSave(inputValue);
     setEditMode(fasle);
    }


    return (<>
        <div>
            <div className="main" style={{ fontFamily: "Cursive", fontSize: 25, fontWeight: 500, marginLeft: 400, marginTop: 50 }}>
                Todo List
                <div className="container">
                    <div className="inputDiv" style={{ borderRadius: 10, fontFamily: "Cursive", fontSize: 25, fontWeight: 450 }}>
                        <input type="text" ref={input} placeholder="" style={{fontFamily:"Cursive"}}/>
                        <button className="addButton" onClick={addTodo} style={{ fontFamily: "Cursive", marginLeft: 10, paddingLeft: 7, paddingRight: 7, paddingTop: 0, paddingBottom: 0 }}>Add</button>
                    </div>
                    <div className="tasksDiv" style={{marginLeft:-10}}>
                        <div className="taskDiv">
        
                        {todos.map((todo,index)=>
                        
                            <p key={index}>
                                 <li>
                                <span>{todo}</span>
                                </li>
                                </p>
                                
                        )}
                        <div>
                            {editMode ? (
                                <input type="text" value={inputValue}
                            onChange={(e)=> setInputValue(e.targetvalue)}
                            onBlur={handleSave}
                            />) : (<span onClick={() =>setEditMode(true)}>{value}</span>)}
                        </div>
            

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </>);
}