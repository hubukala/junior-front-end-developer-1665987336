import '../styles/Tile.css'
import taskList from '../data/task-list.json'

function Tile (props) {

    return (
        <div className='TileBox'>
            <div className='TileInfo'>
                <span className='NewIcon'>NEW</span>
                <span>{props.author}</span>•
                <span>{props.created_at}</span>
            </div>
            <h1 className='TileTitle'>New task sprint info</h1>
            <p className='TileContent'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in modi quod rem? Obcaecati saepe velit molestiae quae voluptate vero, recusandae veritatis aspernatur! Itaque perferendis, eum doloribus assumenda ea libero!
            </p>
        </div>
    )
}

export default Tile;