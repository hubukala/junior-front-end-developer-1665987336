import '../styles/Tile.css';

function Tile ({ 
    props,
    showCurrentTitle,
    setCurrentTitle,
    setMessageAuthor,
    setMessageAuthorImage,
    setMessageCreated,
    setMessageContent,
    showIcon,
    setShowIcon
}) {

    return (
        <div className={showCurrentTitle === props.title ? 'TileCardActive' : 'TileCard'} 
            onClick={() => {
                setCurrentTitle(props.title)
                setMessageAuthor(props.author)
                setMessageAuthorImage("https://www.stepstherapy.com.au/wp-content/uploads/2018/10/Yazmin-profile-picture-square.jpg")
                setMessageCreated(props.created_at)
                setMessageContent(props.content)
                setShowIcon((showIcon) => ([...showIcon, props.title]))}
            }
        >
            <div className='TileInfo'>
                <span className={showIcon.includes(props.title) ? 'NewIconDisabled' : 'NewIcon'}>NEW</span>
                <span>{props.author}</span>•
                <span>{props.created_at}</span>
            </div>
            <h1 className='TileTitle'>{props.title}</h1>
            <p className='TileContent'>
                {props.content}
            </p>
        </div>
    );
};

export default Tile;