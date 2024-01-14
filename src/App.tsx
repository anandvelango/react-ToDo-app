import { useState, useEffect } from 'react'
import AddTask from './AddTask'
import DisplayTask from './DisplayTask'

function App() {
  const [task, setTask] = useState("") 
  const [taskList, setTaskList] = useState(() => {
    const localTaskList = localStorage.getItem("ITEMS")
    if (localTaskList === null) return []

    return JSON.parse(localTaskList)
  })
  
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(taskList))
  }, [taskList])

  return (
    <>
      <div className="tasks">
        <AddTask task={task} taskList={taskList} setTask={setTask} setTaskList={setTaskList}/>
        <DisplayTask taskList={taskList} setTaskList={setTaskList}/>
      </div>

    </>
  )
}

export default App
