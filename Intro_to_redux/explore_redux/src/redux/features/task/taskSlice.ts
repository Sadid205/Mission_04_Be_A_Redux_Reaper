import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "heigh" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "afsdfi9uwer",
      title: "Initialize frontend",
      description: "Create Home page,and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "afsdfi9uwrwer3432423er",
      title: "Init github",
      description: "Create Stage branch",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
