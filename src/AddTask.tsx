import { useRef, useEffect } from "react"
import { addtaskProps } from "./types/general.interface"



function AddTask({ task, taskList, setTask, setTaskList }: addtaskProps){
    const addTaskInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        addTaskInput.current?.focus()
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        if (task !== ""){
            e.preventDefault()
            setTask("")
            const dateTime = time()
            setTaskList(() : {} => {
              return [
                ...taskList,
                {id: crypto.randomUUID(), name: task, time: dateTime, completed: false}
              ]
            })
        } else {
            e.preventDefault()
        }
    }

    const time = () => {
        const date = new Date()
        const dateTime: string = + date.getHours() + ":"  
        + date.getMinutes() + " "
        + date.getDate() + "/"
        + (date.getMonth()+1)  + "/" 
        + date.getFullYear();

        return dateTime
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Task" className="form-control taskInput" type="text" ref={addTaskInput} onChange={(e: any) => setTask(e.target.value)} value={task}/>
                <input className="btn btn-primary submitBtn" type="submit"/>
            </form>
        </>
    )
}

export default AddTask;