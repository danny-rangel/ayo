import React from 'react';
import { WindowHeader, Window, Button, Toolbar, WindowContent, Fieldset } from 'react95';

const BuddyList = () => {
    return (
        <>
            <Window style={{width: 300, height: 600, margin: '-2rem 0 0 3rem'}}>
                <WindowHeader>
                    Buddy List
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
                </WindowContent>
            </Window>
        </>
    );
}

export default BuddyList;