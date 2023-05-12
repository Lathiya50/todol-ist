import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import TodosList from "./components/todos-list.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";

import logo from "./logo.svg";

import React from "react";

export default function App() {
  return (
    <Routes>
      <div className="container">
        <h1>jhjhj</h1>
        <Route path="/" exact component={<TodosList />} />
        <Route path="/edit/:id" component={<EditTodo />} />
        <Route path="/create" component={<CreateTodo />} />
      </div>
    </Routes>
  );
}
