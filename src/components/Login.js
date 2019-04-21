import React from 'react';
import { Window, WindowContent, Fieldset, Button } from 'react95';
import WindowBar from './WindowBar';
import styled from 'styled-components'

const StyledField = styled(Fieldset)`
    background-color: black;
`;

const StyledHeaderText = styled.h1`
    color: white;
    font-size: 6rem;
    text-align: center;
    font-family: 'Pacifico', cursive;
    line-height: 150px;
`;

const Login = ({ handleSignIn }) => {
    return (
        <>
            <Window style={{
                width: 300, 
                height: 450, 
                margin: '0', 
                display: 'grid',
                gridTemplateRows: '40px auto',
                justifySelf: 'center',
                alignSelf: 'center'
            }}>
                <WindowBar header="Sign On"/>
                <WindowContent style={{
                    margin: '0', 
                    display: 'grid',
                    gridTemplateRows: '3fr 1fr',
                }}>
                <StyledField>
                    <StyledHeaderText>ayo</StyledHeaderText>
                </StyledField>
                <Button fullWidth onClick={handleSignIn} style={{
                            margin: '0',
                            alignSelf: 'center'
                        }} >Sign in with Google</Button>
                </WindowContent>
            </Window>
        </>
    );
}

export default Login;