import React from 'react';
import { WindowHeader, Window, Button, Toolbar, WindowContent } from 'react95';

const ChatWindow = () => {
    return (
        <div>
            <Window style={{width: 600, height: 600}}>
                <WindowHeader>
                    ayo
                </WindowHeader>
                <Toolbar>
                <Button
                    flat
                    size="sm"
                >
                File
                </Button>
                <Button
                    flat
                    size="sm"
                >
                Edit
                </Button>
                <Button
                    flat
                    size="sm"
                >
                Insert
                </Button>
                <Button
                    flat
                    size="sm"
                >
                People
                </Button>
                </Toolbar>
                <WindowContent>
                    
                </WindowContent>
            </Window>
        </div>
    );
}

export default ChatWindow;