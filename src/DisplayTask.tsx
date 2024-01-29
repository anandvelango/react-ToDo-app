import { useState, useEffect } from "react"
import UpdateTask from "./UpdateTask";
import { displaytaskProps, taskProperties } from "./types/general.interface"

function DisplayTask( {taskList, setTaskList}: displaytaskProps ){
    const [tasksFilter, setTasksFilter] = useState("all")
    const [filteredTasks, setFilteredTasks] = useState([...taskList]);

    const [showModal, setShowModal] = useState(false)
    const [taskName, setTaskName] = useState("")
    const [taskID, setTaskID] = useState("")

    useEffect(() => {
        filterTaskDisplay()
    }, [tasksFilter, taskList])

    const deleteTasks = (id: string) => {
        setTaskList((): taskProperties[] => {
          return taskList.filter((task: taskProperties) => task.id !== id)
        })
    }
    
    const toggleTask = (id: string, completed: boolean) => {
        setTaskList((currentTasks: taskProperties[]) => {
            return currentTasks.map((task: taskProperties) => {
                if (task.id === id){
                    return {...task, completed: completed}
                }
            
                return task
            })
        })
    }

    const filterTaskDisplay = () => {
        switch (tasksFilter){
            case "all":
                setFilteredTasks([...taskList])
                break;
            case "pending":
                setFilteredTasks(taskList.filter((task: taskProperties) => !task.completed))
                break;
            case "completed":
                setFilteredTasks(taskList.filter((task: taskProperties) => task.completed))
                break;
            default:
                setFilteredTasks([...taskList])
        }
    }

    const onclickButtonStyle = {
        backgroundColor: "#0a5fdf",
        color: "white"
    }

    return (
        <>
            <div className="taskBoard">
                <div className="boardTop">
                    <div className="headingCol">
                        <div className="heading">ToDo List</div>
                        {filteredTasks.length !== 0 && (
                        <div className="tasksAmount">{filteredTasks.length} task(s)</div>
                    )}
                    </div>
                    <div className="buttonsGroup">
                        <button className="btn btn-outline-primary" style={tasksFilter === "all" ? onclickButtonStyle : undefined} onClick={() => setTasksFilter("all")}>All</button>
                        <button className="btn btn-outline-primary" style={tasksFilter === "pending" ? onclickButtonStyle : undefined} onClick={() => setTasksFilter("pending")}>Pending</button>
                        <button className="btn btn-outline-primary" style={tasksFilter === "completed" ? onclickButtonStyle : undefined} onClick={() => setTasksFilter("completed")}>Completed</button>
                    </div>
                </div>
                <div className="taskList">
                    {filteredTasks && filteredTasks.map((task: taskProperties) => (
                        <div className="task" key={task.id}>
                            <input className="form-check-input checkBox" type="checkbox" style={{cursor: "pointer"}} checked={task.completed} onChange={(e: React.ChangeEvent<HTMLInputElement>) => toggleTask(task.id, e.target.checked)}/>
                            <div>
                                <div className="taskName" id={task.completed ? "taskStrike" : ""}>{task.name}</div>   
                                <div className="taskDate">{task.time}</div>
                            </div>
                            <div className="taskActions">
                                <button className="btn btn-dark editButton" onClick={() => {
                                    setShowModal(true)
                                    setTaskName(task.name)
                                    setTaskID(task.id)
                                }}>Edit</button>
                                <button className="btn btn-dark deleteButton" onClick={() => deleteTasks(task.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                    {filteredTasks.length === 0 && (
                        <div className="noTodos">No ToDos</div>
                    )}
                </div>
            </div>
            <UpdateTask showModal={showModal} setShowModal={setShowModal} taskName={taskName} taskID={taskID} setTaskList={setTaskList}/>
        </>
    )
}

export default DisplayTask