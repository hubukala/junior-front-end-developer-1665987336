import '../styles/BusinessContext.css';
import taskList from '../data/task-list.json';
import {useState} from 'react';
import { FaRegCompass } from 'react-icons/fa';
import Tile from './Tile';
import MessageBox from './MessageBox';

function BusinessContext({ 
    showCurrentTask,
    showCurrentTitle,
    setCurrentTitle,
    showMessageAuthor,
    setMessageAuthor,
    setMessageAuthorImage,
    showMessageAuthorImage,
    setMessageCreated, 
    showMessageCreated,
    setMessageContent,
    showMessageContent
}) {

    const [showIcon, setShowIcon] = useState([])

    const createTiles = taskList.find(
        (task => task.title === showCurrentTask)).business_context.map((item) => 
        <Tile
            key={item.title}
            setCurrentTitle={setCurrentTitle}
            showCurrentTitle={showCurrentTitle}
            setMessageAuthor={setMessageAuthor}
            setMessageAuthorImage={setMessageAuthorImage}
            setMessageCreated={setMessageCreated}
            setMessageContent={setMessageContent}
            showIcon={showIcon}
            setShowIcon={setShowIcon}
            props={{
                author: item.author,
                created_at: item.created_at,
                title: item.title,
                content: item.content
            }}
        />
    )

    return (
        <div className='BusinessContextContainer'>
            <div className='BusinessContextNav'>
                <FaRegCompass className='CompassIcon'/>
                <h1 className='BusinessContextTitle'>BUSINESS CONTEXT</h1>
            </div>
            <div className='ContentContainer'>
                <div className='TilesBox'>
                    {createTiles}
                </div>
                <MessageBox
                    title={showCurrentTitle}
                    author={showMessageAuthor}
                    created_at={showMessageCreated}
                    content={showMessageContent}
                    image={showMessageAuthorImage}
                />
            </div>
        </div>
    );
};

export default BusinessContext;