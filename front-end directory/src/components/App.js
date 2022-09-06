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
import React, {useState, useEffect} from "react";



function App (){

  const [todos, setTodos] = useState([]);

  useEffect(() => {
 
    fetch("http://localhost:9292/all-tasks")

    .then(res => res.json())
    .then(data => {
      setTodos(data)
    })
  },[])

  
  
  function handleUpdateTask(updatedItem) {
    const updatedItems = todos.map((item) => {
      if(item.id === updatedItem.id){
        return updatedItem;
      }
      return item;
    })
    setTodos(updatedItems)
  }

  
  function handleDeletedTask(id){
    const updatedItems = todos.filter(item => item.id !== id)
    setTodos(updatedItems)
    console.log(updatedItems)
  }

  
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
          <MindCare 
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeletedTask} 
          />
        </Route>

        <Route exact path="/social-life">
          <SocialLife
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeletedTask} 
          />
        </Route>

      </Switch>

    </div>
  )
}

export default App;




