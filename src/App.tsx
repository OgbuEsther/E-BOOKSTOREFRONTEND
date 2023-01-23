import React from "react";
import Allroutes from "./components/allroutes/allroutes";
import Header from "./components/Header/Header";
import TodoHeader from "./TodoComp/TodoHeader/TodoHeader";
import TodoHomeScreen from "./TodoComp/TodoHomeScreen";
import TodoRoutes from "./TodoComp/TodoRoutes/TodoRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <Allroutes />
      {/* <TodoHeader /> */}
      {/* <TodoRoutes /> */}
    </div>
  );
};

export default App;
