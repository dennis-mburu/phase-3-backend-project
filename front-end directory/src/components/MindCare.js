import React from "react"
import Tasks from "./Tasks"

function MindCare ({allTodos, onUpdateTask, onDeleteTask}){

    const mindTasks = allTodos.filter(item => item.category === "mind-care")


    return (
        <div>
            <div className="Container">
                <h4>Sometimes, pressures of life can become a bit overwhelming, and it is therefore important to find some escape means, formulas, plans, procedures etc that will calm our minds, help us stay grounded  and maintain sharpness at all times.</h4>
                <h4>You can add some of these things in this tab, and <em>always come back here whenever you feel some sort of mental draining and you need to "recharge". </em>It could be a hobby, or fun activity that you love doing.</h4> 
                <h4>Also add some practices and patterns here that you beleive will lead you into <em>becoming a better version of yourself.</em> </h4>
            </div>
            <ul className="Items">{mindTasks.map(item => <Tasks 
            key={item.id}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            item={item}/>)}
            </ul>
        </div>
    )
}
export default MindCare