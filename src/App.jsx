import React, { useState } from "react";
import Addtask from "./components/Addtask";
import Displaytask from "./components/Displaytask";
import Errormsg from "./components/Errormsg";
function App() {
 
  const [list, setList] = useState([]);
 

  const taskList = (task, details) => {
    if (task === "" || details === "") {
      alert("please fill details");
      return;
    }
    const newList = { task, details };
    setList([...list, newList]);
  };
  const deleteTask = (idx) => {
    const updateList = [...list];
    updateList.splice(idx, 1);
    setList(updateList);
  };
  return (
    <>
      <div className="px-5 py-5 lg:flex  gap-10">
        <Addtask taskList={taskList}></Addtask>
        <Errormsg list={list}></Errormsg>
        <Displaytask list={list} deleteTask={deleteTask}></Displaytask>
      </div>
    </>
  );
}

export default App;
