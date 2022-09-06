import React, {useState, useEffect} from "react";
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

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    
    // fetch("http://localhost:4000/todos")

    // to switch to development mode, uncomment the line above and comment 
    // out the next line below, and vice Versa applies to switch from 
    // production to development.
    
    
    fetch("https://ancient-depths-93551.herokuapp.com/todos")
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

  function handleAddTask(newTask){
    setTodos([...todos, newTask])
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
          <AllTasks allTodos={todos} 
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeletedTask}  />
        </Route>

        <Route exact path="/add-task">
          <AddTaskForm onAddTask={handleAddTask}/>
        </Route>

        <Route exact path="/daily">
          <Daily 
          allTodos={todos}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeletedTask} />
        </Route>

        <Route exact path="/finances">
          <Finances 
          allTodos={todos}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeletedTask} />
        </Route>

        <Route exact path="/mind-care">
          <MindCare 
          allTodos={todos}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeletedTask} />
        </Route>

        <Route exact path="/social-life">
          <SocialLife
          allTodos={todos}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeletedTask} />
        </Route>

      </Switch>

    </div>
  )
}

export default App;




