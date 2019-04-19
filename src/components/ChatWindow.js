import React from 'react';
import { Window, WindowContent, TextArea } from 'react95';
import TextField from './TextField';
import WindowBar from './WindowBar';

const users = ["danny", "john", "dave", "meghan"];

const ChatWindow = () => {
    return (
        <>
            <Window style={{
                width: 600, 
                height: 600, 
                margin: '0', 
                display: 'grid',
                gridTemplateRows: '40px 30px auto'
            }}>
                <WindowBar header="Ayo"/>
                <WindowContent style={{
                        display: 'grid',
                        gridGap: '20px',
                        gridTemplateRows: '2fr 1fr'                      
                    }}>
                        <TextField>
                            {users}
                        </TextField>
                        <TextArea placeholder="Type in here.."/>
                </WindowContent>
            </Window>
        </>
    );
}

export default ChatWindow;