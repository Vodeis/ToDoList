import { Dispatch } from "react";

export type Task = {
  name: string;
  isDone: boolean;
};

export type Tasks = Task[];

export type State = {
  newTask: string;
  tasks: Tasks;
};

export enum ActionType {
  ADD = "ADD",
  CHANGE = "CHANGE",
  REMOVE = "REMOVE",
  TOGGLE = "TOGGLE",
}

type ActionStringPayload = {
  type: ActionType.ADD | ActionType.CHANGE;
  payload: string;
};

type ActionObjectPayload = {
  type: ActionType.TOGGLE | ActionType.REMOVE;
  payload: Task;
};

export type Action = ActionStringPayload | ActionObjectPayload;

export type ContextState = {
  state: State;
  changeState: Dispatch<Action>;
};
