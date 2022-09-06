import React from "react"
import { useEffect, useState } from "react";
import Tasks from "./Tasks"

function MindCare (){

    const [mindTasks, setmindTasks] = useState([])


    useEffect(() => {
    
        fetch("http://localhost:9292/mind-care")
    
        .then(res => res.json())
        .then(data => {
            setmindTasks(data)
        })
      },[])

      function handleUpdateTask(updatedItem) {
        const updatedItems = mindTasks.map((item) => {
          if(item.id === updatedItem.id){
            return updatedItem;
          }
          return item;
        })
        setmindTasks(updatedItems)
      }
    
      
      function handleDeletedTask(id){
        const updatedItems = mindTasks.filter(item => item.id !== id)
        setmindTasks(updatedItems)
        console.log(updatedItems)
      }


    return (
        <div>
            <div className="Container">
                <h4>Sometimes, pressures of life can become a bit overwhelming, and it is therefore important to find some escape means, formulas, plans, procedures etc that will calm our minds, help us stay grounded  and maintain sharpness at all times.</h4>
                <h4>You can add some of these things in this tab, and <em>always come back here whenever you feel some sort of mental draining and you need to "recharge". </em>It could be a hobby, or fun activity that you love doing.</h4> 
                <h4>Also add some practices and patterns here that you beleive will lead you into <em>becoming a better version of yourself.</em> </h4>
            </div>
            <ul className="Items">{mindTasks.map(item => <Tasks 
            key={item.id}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeletedTask}
            item={item}/>)}
            </ul>
        </div>
    )
}
export default MindCare