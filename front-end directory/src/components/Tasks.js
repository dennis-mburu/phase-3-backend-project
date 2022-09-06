import React from "react";

function Tasks ({item,  onUpdateTask, onDeleteTask}){

  const {task, category, isDone, id} = item

    function handleDoneStatus(){

        fetch(`http://localhost:9292/all-tasks/${id}`, {


            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              isDone: !isDone,
            }),
          })
            .then((r) => r.json())
            .then((updatedTask) =>  onUpdateTask(updatedTask));
    }

    function handleDeleteClick(){

      fetch(`http://localhost:9292/all-tasks/${id}`, {

        method: "DELETE"
      })
      .then(res => res.json())
      .then(() => onDeleteTask(id) )
    }

    return(
        <li className={isDone ? "isDone" : ""}>
            <span>{task}</span>
            <span className="category">{category}</span>
            <button className={isDone  ? "remove" : "add"}
            onClick={handleDoneStatus}>
                {isDone ? "Mark as Undone" : "Mark as Done"}
            </button>
            <button className="remove" onClick={handleDeleteClick}>Delete Task</button>
        </li>
    )
}

export default Tasks