import React from 'react';
import moment from 'moment';

const Message = ({ message }) => {
    return (
        <li style={{ wordBreak: 'break-word' }}>
            <span style={{color: message.color}}>{`${message.username} (${moment.unix(message.createdAt.seconds).format('HH:mm:ss A')})`}</span>
            {`: ${message.text}`}
        </li>
    );
}

export default Message;