import React from 'react';
import { Fieldset } from 'react95';
import styled from 'styled-components';
import Message from './Message'

const MessageField = ({ messages }) => {

    const StyledField = styled(Fieldset)`
    background-color: white;
    padding: 0.2rem;
    outline: none;
    border-width: 2px;
    border-left-color: black;
    border-top-color: black;
    border-right-color: #ffffff;
    border-bottom-color: #ffffff;
    color: black;
    overflow: auto;
`;


    return (
        <StyledField>
            <ul>
                {messages.map((message, index) => {
                    return <Message key={index} message={message} />
                })}
            </ul>
        </StyledField>
    );
}

export default MessageField;