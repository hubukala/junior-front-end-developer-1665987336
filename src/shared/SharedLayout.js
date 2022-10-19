import TaskList from "../components/TaskList"
import { Outlet } from "react-router-dom"

function SharedLayout ({ setCurrentTask }) {
    return (
        <>
            <TaskList
                setCurrentTask={setCurrentTask}
            />
            <Outlet/>
        </>
    )
}

export default SharedLayout;