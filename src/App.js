import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import BusinessContext from './components/BusinessContext';
import SharedLayout from './shared/SharedLayout';
import NotFound from './components/NotFound';
import taskListData from './data/task-list.json';

function App() {

  const [showCurrentTask, setCurrentTask] = useState(taskListData.map((task) => task.title).find((title) => title !== ""))

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=
            {<SharedLayout
              setCurrentTask={setCurrentTask}
            />}>
            <Route path="/task/:taskId" element=
              {<BusinessContext 
                showCurrentTask={showCurrentTask}
              />}
            />
            <Route path="/*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
