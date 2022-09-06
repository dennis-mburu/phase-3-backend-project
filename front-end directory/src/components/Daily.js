import React from "react";
import Tasks from "./Tasks";
import { useEffect, useState } from "react";


function Daily(){
    
    const [dailyTodos, setdaily_todos] = useState([])


    useEffect(() => {
    
        fetch("http://localhost:9292/daily")
    
        .then(res => res.json())
        .then(data => {
          setdaily_todos(data)
        })
      },[])


      function handleUpdateTask(updatedItem) {
        const updatedItems = dailyTodos.map((item) => {
          if(item.id === updatedItem.id){
            return updatedItem;
          }
          return item;
        })
        setdaily_todos(updatedItems)
      }

      function handleDeletedTask(id){
        const updatedItems = dailyTodos.filter(item => item.id !== id)
        setdaily_todos(updatedItems)
        console.log(updatedItems)
      }

    return (
        <div >
            <div className="Container">
                <h4>Some Tasks & routines are Prone to Repeat Themselves on a Daily basis. This category can act as your daily reminder for these <em>repetitive tasks.</em> </h4>
                <h4>Most of these tasks are here to stay, so always ensure that you <em>check with this tab every morning</em> and by the end of the day you have marked out the most essential tasks. </h4>
                <h4>You can add Add routines here that will help you cultivate healthy habits and lifestyles. For the non repetitive tasks just come up <em>impromptu</em> during certain days, you can also add them here then delete the task once you are done with them.</h4>
            </div>

            <ul className="Items">{dailyTodos.map(item => <Tasks 
            key={item.id}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeletedTask}
            item={item}/>)}
            </ul>
        </div>
    )
}
export default Daily