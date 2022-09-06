import Tasks from "./Tasks";

function AllTasks({allTodos,  onUpdateTask, onDeleteTask}){

    return(
        <div className="Container">
            <h4><em>ALL</em> Your Tasks, reminders, routines and goals will be displayed Here: </h4>
            <ul className="Items">{allTodos.map(item => <Tasks 
            key={item.id}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            item={item}/>)}
            </ul>
        </div>
    )
}

export default AllTasks;