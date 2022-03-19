import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";

const Index = () => {
  return(
      <>
        <h1>Lab 6</h1>
        <Classes/>
        <Styles/>
        <ConditionalOutput/>
        <h1>Todo List</h1>
        <TodoList/>
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/tuiter">
          Tuiter
        </Link>
      </>
  )
};

export default Index;
