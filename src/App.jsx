import React, { useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask("");
    setDetails("");
  };

  const taskList = () => {
    if(task==='' || details===''){
      alert('please fill details');
      return
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
      <div className="px-5 py-5 flex  gap-10">
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
            onClick={taskList}
            className="bg-black text-white rounded px-3 py-2 hover:scale-95"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-wrap gap-5">
          {list.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-60 w-50 border rounded px-7 py-5 flex flex-col justify-between"
                style={{
                  background: `url(https://pic.mksucai.com/00/45/32/ee6716cf53affa57.webp)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div>
                  <h2 className="font-black">{elem.task}</h2>
                  <p>{elem.details}</p>
                </div>
                <button
                  onClick={() => {
                    deleteTask(idx);
                  }}
                  className="text-end bg-amber-400 p-1 flex align-center justify-center rounded hover:scale-90"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
