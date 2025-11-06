import React, { useState } from "react";

function Addtask({taskList}) {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask("");
    setDetails("");
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-5 w-lg"
      >
        <h2 className="font-bold">Add Task</h2>
        <input
          type="text"
          placeholder="Add your Task"
          required
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          className="px-3 py-2 border rounded"
        ></input>
        <textarea
          placeholder="Add Task Details"
          required
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className="px-3 py-2 border rounded h-32"
        ></textarea>
        <button
          onClick={()=>taskList(task,details)}
          className="bg-white text-black rounded px-3 py-2 hover:scale-95"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Addtask;
