import React, { useState, ChangeEvent } from "react";
import {ITask} from "../../Interfaces"


const ToDoList = () => {

const [task, setTask] = useState<string>("")
const [todo, addTodoList] = useState<any[]>([])

const handleAdd = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
        setTask(event.target.value)
    } 
    
}

const addTask = () => {
    const newTask = {taskName: task};
    addTodoList([...todo, newTask])
    setTask("")
    
}


const deleteAll = () => {
    addTodoList([])
}


    return(
        <div className="App">
        <div className="header">
          <input type="text" placeholder="To Do" name="task" value={task} onChange={handleAdd}/>
          <button onClick={addTask}>Add</button>
          <button onClick={deleteAll}>Delete Completed</button>
          <div className="todoList">
            {todo.map((task: ITask) => {
                return <div>{task.taskName}</div>
            })}
          </div>


        </div>
      </div>
    )
}


export default ToDoList