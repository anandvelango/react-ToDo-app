import { useState } from "react"
import { updatetaskProps, taskProperties } from "./types/general.interface"

function UpdateTask({taskID, taskName, showModal, setShowModal, setTaskList}: updatetaskProps){
    const [newTaskname, setNewTaskName] = useState("")
    
    const updateTask = () => {
        setNewTaskName(taskName)
        setTaskList((currentTasks: taskProperties[]) => {
            return currentTasks.map((task: taskProperties) => {
                if (task.id === taskID){
                    
                    return {...task, name: newTaskname}
                }
                return task
            })
        })
        setShowModal(false)
        setNewTaskName("")
    }

    return (
        <>
            {showModal && (
            <div className="modalOverlay">
                <div className="editModal">
                    <div className="modalContent">
                        <div className="modalTitle">Edit Task</div>
                        <label className="modalInputLabel" htmlFor="modalInput">Task title</label>
                        <input className="form-control modalInput" id="modalInput" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTaskName(e.target.value)} placeholder={taskName}/>
                        <div className="modalButtons">
                            <button type="button" className="btn btn-primary" onClick={() => updateTask()} disabled={newTaskname.length === 0 ? true : false}>Update Task</button>
                            <button type="button" className="btn btn-light" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default UpdateTask