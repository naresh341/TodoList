"use client";
import React, { useState } from "react";

function page() {
  
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { task, desc }]);
    settask("");
    setdesc("");
  };
  const deletHandler = (i) => {
    let copttask = [...maintask];
    maintask.splice(i, 1);
    setmaintask(copttask);
  };
  let renderTask = <h3 className="font-bold">NO Task Available</h3>;
  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center">
          <div className="flex  justify-between font-bold mb-2 p-2 w-1/2">
            <h4>{t.task}</h4>
            <h5>{t.desc}</h5>
          </div>
          <button
            className="bg-red-500 rounded p-3 mb-3 "
            onClick={() => {
              deletHandler(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <div className="bg-zinc-900 text-white p-5 text-center text-5xl font-bold">
        <h1> TodoList</h1>
      </div>
      <form onSubmit={submithandler}>
        <input
          type="text"
          placeholder="Enter Task"
          className="border-4 border-black m-5 p-2"
          value={task}  // it is a two way binding with onchange event 
          onChange={(e) => settask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          className="border-4 border-black m-5 p-2"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button className="border-4 border-black py-2 px-6 ml-5 bg-zinc-800 text-white rounded font-bold">
          ADD TASK
        </button>
      </form>
      <hr />
      <div className="bg-slate-600 text-white p-5 ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default page;
