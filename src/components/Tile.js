import '../styles/Tile.css'

function Tile (props) {
    return (
        <div className='TileBox'>
            <div className='TileInfo'>
                <span className='NewIcon'>NEW</span>
                <span>{props.author}</span>•
                <span>{props.created_at}</span>
            </div>
            <h1 className='TileTitle'>{props.title}</h1>
            <p className='TileContent'>
                {props.content}
            </p>
        </div>
    )
}

export default Tile;