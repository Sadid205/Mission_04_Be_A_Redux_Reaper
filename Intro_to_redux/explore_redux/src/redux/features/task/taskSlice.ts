import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "SORbaJJCQzHDRTXQhHbUS",
      isCompleted: true,
      title: "lk;lkk",
      description: "kijjkjkol",
      priority: "high",
      dueDate: "2025-06-22T18:00:00.000Z",
      assignedTo: "SORbaJJCQzHDRTXQhHbUSrewrew",
    },
  ],
  filter: "all",
};

type draftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;

const createTask = (taskData: draftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompletedState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "medium" | "low" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else {
    return state.todo.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompletedState, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;
