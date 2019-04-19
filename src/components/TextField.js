import React from 'react';
import { Fieldset } from 'react95';
import styled from 'styled-components';

const TextField = ({ children }) => {

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

    return (
        <StyledField>
            <ul>
                {children.map(child => {
                    return <li key={child}>{child}</li>
                })}
            </ul>
        </StyledField>
    );
}

export default TextField;