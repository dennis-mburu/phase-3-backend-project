import React from "react";
import Tasks from "./Tasks";

function Daily({allTodos, onUpdateTask, onDeleteTask}){
    
    const dailyTodos = allTodos.filter(item => item.category === "daily")

    return (
        <div >
            <div className="Container">
                <h4>Some Tasks & routines are Prone to Repeat Themselves on a Daily basis. This category can act as your daily reminder for these <em>repetitive tasks.</em> </h4>
                <h4>Most of these tasks are here to stay, so always ensure that you <em>check with this tab every morning</em> and by the end of the day you have marked out the most essential tasks. </h4>
                <h4>You can add Add routines here that will help you cultivate healthy habits and lifestyles. For the non repetitive tasks just come up <em>impromptu</em> during certain days, you can also add them here then delete the task once you are done with them.</h4>
            </div>

            <ul className="Items">{dailyTodos.map(item => <Tasks 
            key={item.id}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            item={item}/>)}
            </ul>
        </div>
    )
}
export default Daily