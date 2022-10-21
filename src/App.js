import './App.css';
import taskListData from './data/task-list.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import BusinessContext from './components/BusinessContext';
import SharedLayout from './shared/SharedLayout';
import NotFound from './components/NotFound';

function App() {

  const [showCurrentTask, setCurrentTask] = useState(taskListData.map((task) => task.title).find((title) => title !== ""));
  const [showCurrentTitle, setCurrentTitle] = useState(" ");
  const [showMessageAuthor, setMessageAuthor] = useState(" ");
  const [showMessageAuthorImage, setMessageAuthorImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/640px-HD_transparent_picture.png");
  const [showMessageCreated, setMessageCreated] = useState(" ");
  const [showMessageContent, setMessageContent] = useState(" ");

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=
            {<SharedLayout
              showCurrentTask={showCurrentTask}
              setCurrentTask={setCurrentTask}
            />}>
            <Route path="/task/:taskId" element=
              {<BusinessContext 
                showCurrentTask={showCurrentTask}
                showCurrentTitle={showCurrentTitle}
                setCurrentTitle={setCurrentTitle}
                showMessageAuthor={showMessageAuthor}
                setMessageAuthor={setMessageAuthor}
                showMessageAuthorImage={showMessageAuthorImage}
                setMessageAuthorImage={setMessageAuthorImage}
                showMessageCreated={showMessageCreated}
                setMessageCreated={setMessageCreated}
                showMessageContent={showMessageContent}
                setMessageContent={setMessageContent}
              />}
            />
            <Route path="/*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
