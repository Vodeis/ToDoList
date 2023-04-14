import React from "react";

import { useContext } from "react";
import { ContextApp } from "../../App";
import { Task } from "../../types/stateType";
import { ActionType } from "../../types/stateType";

const NewTask: React.FC = () => {
  const { state, changeState } = useContext(ContextApp);

  const addTask = (
    event: React.FormEvent<HTMLFormElement>,
    task: Task["name"]
  ) => {
    event.preventDefault();
    changeState?.({ type: ActionType.ADD, payload: task });
    changeState?.({ type: ActionType.CHANGE, payload: "" });
  };
  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeState?.({ type: ActionType.CHANGE, payload: event.target.value });
  };

  return (
    <>
      <form onSubmit={(event) => addTask(event, state ? state.newTask : "")}>
        <input
          type="text"
          onChange={(event) => changeTask(event)}
          value={state && state.newTask}
        />
        <button type="submit">Add a task</button>
      </form>
    </>
  );
};

export default NewTask;
