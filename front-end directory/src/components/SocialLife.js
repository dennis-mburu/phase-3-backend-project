import React from "react";
import Tasks from "./Tasks";

function SocialLife({allTodos, onUpdateTask, onDeleteTask}){

    const socialTodos = allTodos.filter(item => item.category === "people")

    return (
        <div>
            <div className="Container">
                <h4>Family & Friends are the silent Heroes who steer us away from bad ideas & towards good ones & without their help and support, we cannot win anything. However, people tend to drift apart due to lack of effort from both parties to reach out to each other, and it is therefore our social responsibility to contribute in maintaining strong family ties and healthy friendships and relationships.</h4>
                <h4>Use this tab to <em>purposely make plans</em> with specific people (feel free to mention their names), so that you can always remain in close contact with them, whether they are far or nearby.</h4>
                <h4>The more tasks you will complete here, the healthier for you, but aim to accomplish <em>at least 2 tasks from here on a weekly basis</em> </h4>
            </div>
            <ul className="Items">{socialTodos.map(item => <Tasks 
            key={item.id}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            item={item}/>)}
            </ul>
        </div>
    )
}
export default SocialLife;