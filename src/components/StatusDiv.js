import React from 'react';
import styled from 'styled-components';

const SyledDiv = styled.div`
    background-color: ${props => props.isOnline ? `green` : `gray`};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 4px; 
`;

const StatusDiv = ({ isOnline }) => {
    return <SyledDiv isOnline={isOnline} ></SyledDiv>
}

export default StatusDiv;