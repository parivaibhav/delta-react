import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [todos, setTodos] = useState([
    { task: "sample test", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo.trim(), id: uuidv4() },
    ]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  let markAsDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isDone: true,
      }))
    );
  };

  const listStyle = {
    padding: "13px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  const buttonStyle = {
    padding: "6px 12px",
    marginLeft: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const deleteBtnStyle = {
    ...buttonStyle,
    backgroundColor: "#ff4d4f",
    color: "white",
  };

  const editBtnStyle = {
    ...buttonStyle,
    backgroundColor: "#1890ff",
    color: "white",
  };

  const containerStyle = {
    maxWidth: "500px",
    margin: "100px auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f2f5",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginBottom: "15px",
  };

  const addBtnStyle = {
    ...buttonStyle,
    backgroundColor: "#52c41a",
    color: "white",
    width: "100%",
    height: "50px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", color: "#333" }}>📝 Todo List</h2>
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
        style={inputStyle}
      />
      <button onClick={addNewTask} style={addBtnStyle}>
        Add Task
      </button>
      <h3 style={{ marginTop: "30px", color: "#555" }}>Your Tasks</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={listStyle}>
            <span
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
             >
              {todo.task}
            </span>
            <div>
              <button
                style={deleteBtnStyle}
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
              <button style={editBtnStyle} onClick={() => markAsDone(todo.id)}>
                mark as Done
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button style={editBtnStyle} onClick={markAsDoneAll}>
        mark all Done
      </button>
    </div>
  );
}

export default TodoList;
