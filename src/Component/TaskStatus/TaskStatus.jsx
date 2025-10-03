import React from "react";

const TaskStatus = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div className="mb-3 w-[100%] bg-white shadow-sm p-5 rounded-lg">
            <p className="text-lg mb-5" key={index}>{task.title}</p>
            <button className="bg-green-500 w-full p-1 rounded-lg">
              Complete
            </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;


