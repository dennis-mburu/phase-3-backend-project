import React from "react";
import AllTasks from "./AllTasks";
import Home from "./Home";
import NavBar from "./NavBar";
import "../App.css"
import { Route, Switch } from "react-router-dom";
import AddTaskForm from "./AddTaskForm";
import Daily from "./Daily";
import Finances from "./Finances";
import MindCare from "./MindCare";
import SocialLife from "./SocialLife";



function App (){
  
  return (
    <div className="App ">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/all-tasks">
          <AllTasks />
        </Route>

        <Route exact path="/add-task">
          <AddTaskForm 
          />
        </Route>

        <Route exact path="/daily">
          <Daily />
        </Route>

        <Route exact path="/finances">
          <Finances />
        </Route>

        <Route exact path="/mind-care">
          <MindCare />
        </Route>

        <Route exact path="/social-life">
          <SocialLife />
        </Route>

      </Switch>

    </div>
  )
}

export default App;




