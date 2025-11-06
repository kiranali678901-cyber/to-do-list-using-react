import React from "react";

function Displaytask({ list, deleteTask }) {
  return (
    <>
      <div className="flex flex-wrap gap-5 mt-5 ">
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
                <h2 className="font-black text-black">{elem.task}</h2>
                <p className="text-black">{elem.details}</p>
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
    </>
  );
}

export default Displaytask;
