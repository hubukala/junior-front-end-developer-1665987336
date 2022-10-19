import '../styles/BusinessContext.css'
import Tile from './Tile';
import { FaRegCompass } from 'react-icons/fa';
import taskList from '../data/task-list.json';
// import { useParams } from 'react-router-dom';

function BusinessContext({ showCurrentTask }) {

    const currentTitle = showCurrentTask;

    const createTiles = taskList.find(
        (task => task.title === currentTitle)).business_context.map((item) => 
        <Tile 
            key={item.title}
            author={item.author}
            created_at={item.created_at}
            title={item.title}
            content={item.content}
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
                <div className='MessageBox'>
                    <h1 className='MessageBoxTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className='MessageBoxContent'>
                        <div className='MessageInfo'>
                            <span className='MessageAuthor'>Kristen Aniston</span>
                            <span className='MessageInfoDetails'>• 01 Dec 2022 •</span>
                        </div>
                        <p className='MessageBoxParagraph'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Temporibus corporis iste rem delectus, eveniet numquam, nostrum, 
                            error deserunt tenetur asperiores molestias illo voluptatum provident iusto consequatur. 
                            Cupiditate enim repellat cumque!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessContext;