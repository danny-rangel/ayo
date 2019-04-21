import React from 'react';
import { Fieldset } from 'react95';
import styled from 'styled-components';
import StatusDiv from './StatusDiv';

const StyledField = styled(Fieldset)`
    background-color: white;
    padding: 0.5rem;
    outline: none;
    border-width: 2px;
    border-left-color: black;
    border-top-color: black;
    border-right-color: #ffffff;
    border-bottom-color: #ffffff;
    color: black;
    height: 95%;
`;



const TextField = ({ children }) => {
    return (
        <StyledField>
            <ul>
                {children.map(child => {
                    if (!child.status) {
                        return <div key={child.uid}></div>;
                    } else {
                    return (
                        <li key={child.uid} >
                            <StatusDiv isOnline={child.status.state === "online" ? true : false}/>
                            {child.displayName}
                        </li>
                        );
                    }
                })}
            </ul>
        </StyledField>
    );
}

export default TextField;