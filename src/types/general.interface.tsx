export interface taskProperties{
    id: string;
    name: string;
    time: string
    completed: boolean;
}


export interface displaytaskProps {
    taskList: [];
    setTaskList: Function;
}

export interface addtaskProps{
    task: string;
    taskList: taskProperties[];
    setTask: Function;
    setTaskList: Function;
}

export interface updatetaskProps {
    taskID: string;
    taskName: string;
    showModal: boolean;
    setShowModal: Function;
    setTaskList: Function;
}