import TaskList from '../components/TaskList';
import { Outlet } from 'react-router-dom';

function SharedLayout ({ setCurrentTask, showCurrentTask }) {
    return (
        <>
            <TaskList
                showCurrentTask={showCurrentTask}
                setCurrentTask={setCurrentTask}
            />
            <Outlet/>
        </>
    );
};

export default SharedLayout;