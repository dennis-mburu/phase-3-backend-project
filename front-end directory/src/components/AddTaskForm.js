import React, { useState } from "react";

function AddTaskForm({onAddTask}){

    const[task, setTask] = useState("");
    const[category, setCategory] = useState("daily");

    function handleSubmit(e){
        e.preventDefault()

        // fetch("http://localhost:4000/todos", {

        // to switch to development mode, uncomment the line above and comment 
        // out the next line below, and vice Versa applies to switch from 
        // production to development.

        fetch("https://ancient-depths-93551.herokuapp.com/todos", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                task: task,
                category: category,
                isDone: false
            })
        })
        .then(res => res.json())
        .then (newTask => onAddTask(newTask))
        setTask('')
    }

    return(
        <div>
            <div className="Container">
                <h4><em>Ensure that you have gone through all the different task categories so that can classify your new task in the appropriate category before submission.</em></h4>
            </div>
            <form className="NewItem" onSubmit={handleSubmit}>
                <label>
                    New Task: 
                    <input 
                        type="text"
                        name="todos"
                        value={task}
                        placeholder="Enter New Task Here..."
                        onChange={(e) => setTask(e.target.value)}
                    />
                </label><br></br>

                <label>
                    Category:
                    <select
                        name="category"
                        value={category}
                        onChange={(e)=> setCategory(e.target.value)}
                    >
                        <option value="daily">Daily chores and Routines</option>
                        <option value="finances">Career Prosperity and Financial Freedom</option>    
                        <option value="people">Strong Family ties, healthy friendships and relationships</option>    
                        <option value="mind-care">Mind Care, Self Growth and Development</option>    
                    </select>    
                </label><br></br>

                <button type="submit">Add New Task</button>
            </form>
        </div>
    )
}

export default AddTaskForm