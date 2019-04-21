import React from 'react';
import moment from 'moment';

const Message = ({ message }) => {

    switch(message.type) {
        case 'message':
            return (
                <li style={{ wordBreak: 'break-word' }}>
                    <span style={{color: message.color}}>{`${message.username} (${moment.unix(message.createdAt.seconds).format('hh:mm:ss A')})`}</span>
                    {`: ${message.text}`}
                </li>
            );
        case 'signOn':
            return (
                <li style={{ wordBreak: 'break-word' }}>
                    <span style={{color: message.color}}>
                        {`${message.username} signed on at ${moment.unix(message.createdAt.seconds).format('hh:mm:ss A')}.`}
                    </span>
                </li>
            );
        case 'signOff':
            return (
                <li style={{ wordBreak: 'break-word' }}>
                    {`${message.username} signed off at ${moment.unix(message.createdAt.seconds).format('hh:mm:ss A')}.`}
                </li>
            );
        default:
            return null;
      }
}

export default Message;