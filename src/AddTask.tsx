

function AddTask({ task, taskList, setTask, setTaskList }: any){

    const handleSubmit = (e: any) => {
        if (task !== ""){
            e.preventDefault()
            setTask("")
            const dateTime = time()
            setTaskList(() : any => {
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
                <input placeholder="Task" className="form-control taskInput" type="text" onChange={(e: any) => setTask(e.target.value)} value={task}/>
                <input className="btn btn-primary submitBtn" type="submit"/>
            </form>
        </>
    )
}

export default AddTask;