import '../styles/MessageBox.css';

function MessageBox(props) {
    return (
        <div className='MessageBox'>
        <div className='MessageBoxContent'>
            <h1 className='MessageBoxTitle'>{props.title}</h1>
            <div className='MessageInfo'>
                <img className="MessageAuthorImage" src={props.image} alt="profilepic" width="50" height="50"/>
                <div className='MessageDetails'>
                    <span className='MessageAuthor'>{props.author}</span>
                    <span className='MessageCreatedAt'>{props.created_at}</span>
                </div>
            </div>
            <p className='MessageBoxParagraph'>
                {props.content}
            </p>
        </div>
    </div>
    );
};

export default MessageBox;