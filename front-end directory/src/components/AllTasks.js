import Tasks from "./Tasks";
import React, {useState, useEffect} from "react";


function AllTasks(){

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

    return(
        <div className="Container">
            <h4><em>ALL</em> Your Tasks, reminders, routines and goals will be displayed Here: </h4>
            <ul className="Items">{todos.map(item => <Tasks 
            key={item.id}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeletedTask}
            item={item}/>)}
            </ul>
        </div>
    )
}

export default AllTasks;