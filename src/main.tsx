import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoList from "./routes/todolist";

async function addTodo(context) {
  const { request } = context;
  const formData = await request.formData();
  const { todo, date } = Object.fromEntries(formData);
  const todos = getTodo();
  todos.push({ todo, date });
  localStorage.setItem(import.meta.env.VITE_STORAGE_KEY, JSON.stringify(todos));
  return null;
}
function getTodo(): Record<string, string>[] {
  const storage = localStorage.getItem(import.meta.env.VITE_STORAGE_KEY);
  return !storage ? [] : JSON.parse(storage);
}

const router = createBrowserRouter([
  {
    path: "/",
    action: addTodo,
    element: <Home />,
    children: [
      {
        index: true,
        loader: getTodo,
        element: <TodoList />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
