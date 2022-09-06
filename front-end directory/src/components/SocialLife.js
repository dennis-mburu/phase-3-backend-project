import React from "react";
import Tasks from "./Tasks";
import { useEffect, useState } from "react";


function SocialLife(){

    const [socialTodos, set_social_todos] = useState([])


    useEffect(() => {
    
        fetch("http://localhost:9292/people")
    
        .then(res => res.json())
        .then(data => {
            set_social_todos(data)
        })
      },[])

      function handleUpdateTask(updatedItem) {
        const updatedItems = socialTodos.map((item) => {
          if(item.id === updatedItem.id){
            return updatedItem;
          }
          return item;
        })
        set_social_todos(updatedItems)
      }
    
      
      function handleDeletedTask(id){
        const updatedItems = socialTodos.filter(item => item.id !== id)
        set_social_todos(updatedItems)
        console.log(updatedItems)
      }

    return (
        <div>
            <div className="Container">
                <h4>Family & Friends are the silent Heroes who steer us away from bad ideas & towards good ones & without their help and support, we cannot win anything. However, people tend to drift apart due to lack of effort from both parties to reach out to each other, and it is therefore our social responsibility to contribute in maintaining strong family ties and healthy friendships and relationships.</h4>
                <h4>Use this tab to <em>purposely make plans</em> with specific people (feel free to mention their names), so that you can always remain in close contact with them, whether they are far or nearby.</h4>
                <h4>The more tasks you will complete here, the healthier for you, but aim to accomplish <em>at least 2 tasks from here on a weekly basis</em> </h4>
            </div>
            <ul className="Items">{socialTodos.map(item => <Tasks 
            key={item.id}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeletedTask}
            item={item}/>)}
            </ul>
        </div>
    )
}
export default SocialLife;