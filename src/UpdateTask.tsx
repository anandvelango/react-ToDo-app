import { useState } from "react"

function UpdateTask({showModal, taskName, setShowModal, taskID, setTaskList}: any){
    const [newTaskname, setNewTaskName] = useState("")
    
    const updateTask = () => {
        setTaskList((currentTasks: any) => {
            return currentTasks.map((task: any) => {
                if (task.id === taskID){
                    return {...task, name: newTaskname}
                }

                return task
            })
        })
        
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
            <div className="modalOverlay">
                <div className="editModal">
                    <div className="modalContent">
                        <div className="modalTitle">Edit Task</div>
                        <label className="modalInputLabel" htmlFor="modalInput">Task title</label>
                        <input className="form-control modalInput" id="modalInput" onChange={(e: any) => setNewTaskName(e.target.value)} defaultValue={taskName}/>
                        <div className="modalButtons">
                            <button className="btn btn-primary" onClick={() => updateTask()}>Update Task</button>
                            <button className="btn btn-light" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default UpdateTask