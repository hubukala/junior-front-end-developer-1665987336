import '../styles/TaskList.css'
import taskList from '../data/task-list.json'
import { FaCheck, FaArrowRight, FaLock } from 'react-icons/fa'

function TaskList() {

    const insertIcon = (task) => {
        if (task === "completed") {
            return <FaCheck className='CheckIcon'/>
        } else if (task === "active") {
            return <FaArrowRight className='ActiveIcon'/>
        } else if (task === "locked") {
            return <FaLock className='LockedIcon'/>
        }
    }

    const mappedList = taskList.map((task) => 
        <li className='TaskListItem'>
            {insertIcon(task.status)}
            {task.title}
        </li>
    )

    return (
        <div className='TaskContainer'>
            <div className='TaskNav'>
                <h1 className='TaskTitle'>YOUR TASKS</h1>
            </div>
            <div className='TaskContent'>
                <ul className='TaskListStyled'>
                    {mappedList}
                </ul>
            </div>
        </div>
    )
}

export default TaskList;