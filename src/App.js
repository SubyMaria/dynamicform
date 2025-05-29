import React from "react";
import DynamicForm from "./components/DynamicForm/DynamicForm.jsx";
import schema from "./schema.json";
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
    <div className="formContainer">
      <h1 className="title">{schema.title}</h1>
      <DynamicForm schema={schema} />
    </div>
  </div>
  );
}

export default App;
