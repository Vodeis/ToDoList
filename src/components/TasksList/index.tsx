import React from "react";

import { Task } from "../../types/stateType";
import { ActionType } from "../../types/stateType";
import { useContext } from "react";
import { ContextApp } from "../../App";

const TasksList: React.FC = () => {
  const { state, changeState } = useContext(ContextApp);

  const removeTask = (taskForRemoving: Task) => {
    changeState?.({ type: ActionType.REMOVE, payload: taskForRemoving });
  };
  const toggleReadiness = (taskForChange: Task) => {
    changeState?.({ type: ActionType.TOGGLE, payload: taskForChange });
  };
  return (
    <>
      <ul>
        {state &&
          state.tasks.map((task, i) => (
            <li key={i}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => toggleReadiness(task)}
                  checked={task.isDone}
                />
              </label>
              <div>{task.name}</div>
              <button onClick={() => removeTask(task)}>X</button>
            </li>
          ))}
      </ul>
    </>
  );
};
export default TasksList;
