import React from "react";
export function Todo() {

    return (<>
        <div>
            <div className="main" style={{ fontFamily: "Cursive", fontSize: 25, fontWeight: 500, marginLeft: 450, marginTop: 50 }}>
                Todo List
                <div className="container">
                    <div className="inputDiv" style={{ borderRadius: 10, fontFamily: "Cursive", fontSize: 25, fontWeight: 500 }}>
                        <input type="text"  placeholder="" style={{fontFamily:"Cursive"}}/>
                        <button className="addButton" style={{ fontFamily: "Cursive", marginLeft: 10, paddingLeft: 7, paddingRight: 7, paddingTop: 0, paddingBottom: 0, hover: "add" }}>Add</button>
                    </div>
                    <div className="tasksDiv">
                        <div className="taskDiv">
                            <input type="checkbox" />
                            <span></span>
                            <button className="editButton" style={{ fontFamily: "Cursive", marginLeft: 10, paddingLeft: 7, paddingRight: 7, paddingTop: 0, paddingBottom: 0, hover: "add" }}>Edit</button>
                            <button className="deleteButton" style={{ fontFamily: "Cursive", marginLeft: 10, paddingLeft: 7, paddingRight: 7, paddingTop: 0, paddingBottom: 0, hover: "add" }}>Delete</button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </>);
}