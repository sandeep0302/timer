import React, { useRef, useState } from "react";
export function Todo() {
     const [todos,setTodos] = useState([]);
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

    return (<>
        <div>
            <div className="main" style={{ fontFamily: "Cursive", fontSize: 25, fontWeight: 500, marginLeft: 450, marginTop: 50 }}>
                Todo List
                <div className="container">
                    <div className="inputDiv" style={{ borderRadius: 10, fontFamily: "Cursive", fontSize: 25, fontWeight: 500 }}>
                        <input type="text"  placeholder="" style={{fontFamily:"Cursive"}}/>
                        <button className="addButton" onClick={addTodo} style={{ fontFamily: "Cursive", marginLeft: 10, paddingLeft: 7, paddingRight: 7, paddingTop: 0, paddingBottom: 0 }}>Add</button>
                    </div>
                    <div className="tasksDiv">
                        {todos.map((todo,index)=>
                            <p key={index}>{todo}</p>
                        )}
                        {/* <div className="taskDiv">
                            <input type="checkbox" />
                            <span></span>
                            <button className="editButton" style={{ fontFamily: "Cursive", marginLeft: 10, paddingLeft: 7, paddingRight: 7, paddingTop: 0, paddingBottom: 0 }}>Edit</button>
                            <button className="deleteButton" style={{ fontFamily: "Cursive", marginLeft: 10, paddingLeft: 7, paddingRight: 7, paddingTop: 0, paddingBottom: 0  }}>Delete</button>

                        </div> */}

                    </div>

                </div>

            </div>
        </div>
    </>);
}