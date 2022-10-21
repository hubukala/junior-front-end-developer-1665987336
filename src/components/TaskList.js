import '../styles/TaskList.css';
import taskList from '../data/task-list.json';
import { NavLink } from "react-router-dom";
import { FaCheck, FaArrowRight, FaLock } from 'react-icons/fa';

function TaskList({ setCurrentTask, showCurrentTask }) {

    const insertIcon = (task) => {
        if (task === "completed") {
            return <FaCheck className='CheckIcon'/>
        } else if (task === "active") {
            return <FaArrowRight className='ActiveIcon'/>
        } else if (task === "locked") {
            return <FaLock className='LockedIcon'/>
        }
    };

    const mappedList = taskList.map((task) => 
        <li 
            key={task.title}
            onClick={() => task.status !== "locked" ? setCurrentTask(task.title) : null}
        >
            <NavLink to=
                {"/task/"+(task.title).replace(/\s+/g, '-').toLowerCase()} 
                className={
                    () => {
                        if (task.status === "locked") {
                            return ("TaskListItemLocked")
                        } else if (task.title === showCurrentTask) {
                            return ("TaskListItemActive")
                        } else { return("TaskListItem") }
                    }
                }
            >
                {insertIcon(task.status)}
                {task.title}
            </NavLink>
        </li>
    );

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
    );
};

export default TaskList;

