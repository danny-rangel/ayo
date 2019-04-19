import React from 'react';
import { Window, WindowContent } from 'react95';
import TextField from './TextField';
import WindowBar from './WindowBar';

const buddies = ["danny", "john", "dave", "meghan"];

const BuddyList = () => {
    return (
        <>
            <Window style={{
                width: 300, 
                height: 600, 
                margin: '0', 
                display: 'grid',
                gridTemplateRows: '40px 30px auto'
            }}>
                <WindowBar header="Buddy List"/>
                <WindowContent >
                    <TextField >
                        {buddies}
                    </TextField>
                </WindowContent>
            </Window>
        </>
    );
}

export default BuddyList;