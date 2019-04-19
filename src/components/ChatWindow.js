import React from 'react';
import { WindowHeader, Window, Button, Toolbar, WindowContent, TextArea, Fieldset } from 'react95';


const ChatWindow = () => {
    return (
        <>
            <Window style={{width: 600, height: 600}}>
                <WindowHeader>
                    Ayo
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
                <WindowContent style={{
                        display: 'grid',
                        gridTemplateRows: '2fr 1fr', 
                        height: '500px', 
                        gridGap: '10px',
                        padding: '2px'    
                    }}>
                    <div style={{
                        padding: '1rem',
                        background: '#ced0cf'
                    }}>
                        <Fieldset style={{
                            backgroundColor: 'white',
                            padding: '0.5rem',
                            outline: 'none',
                            borderWidth: '2px',
                            borderLeftColor: 'black',
                            borderTopColor: 'black',
                            borderRightColor: '#ffffff',
                            borderBottomColor: '#ffffff',
                            color: 'black',
                            height: '100%'
                        }}>
                            <ul>
                                <li>danny</li>
                                <li>dd432432</li>
                                <li>4321fdsafd</li>
                                <li>dsavfda432</li>
                                <li>fsgfs</li>
                            </ul>
                        </Fieldset>
                    </div>
                    <div style={{
                        padding: '1rem',
                        background: '#ced0cf'
                    }}>
                        <TextArea placeholder="Type in here.." style={{
                            minHeight: '100%'}}/>
                    </div>
                </WindowContent>
            </Window>
        </>
    );
}

export default ChatWindow;