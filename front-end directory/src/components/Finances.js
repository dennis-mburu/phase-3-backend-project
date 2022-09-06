import React from "react";
import Tasks from "./Tasks";

function Finances ({allTodos, onUpdateTask, onDeleteTask}) {

    const workTasks = allTodos.filter(item => item.category === "finances")

    return (
        <div >
            <div className="Container">
                <h4>Whether employed or not, we all desire <em>Career Prosperity and Financial Freedom.</em>  Use this Tab to put up some <em>SMART goals</em> that will lead you in the right direction while in pursuit of your life's desires. </h4>
                <h4>Tasks in this tab <em>CAN, BUT DO NOT NECCESSARILY HAVE TO</em> have to be completed on a daily basis. Decide on your timeline of completion, and indicate it while submitting your task.</h4>
            </div>
            <ul className="Items">{workTasks.map(item => <Tasks 
            key={item.id}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            item={item}/>)}
            </ul>
        </div>
    )
}

export default Finances;