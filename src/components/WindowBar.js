import React from 'react';
import { WindowHeader, Button, Toolbar } from 'react95';

const WindowBar = ({ header, handleLogOut, logout, toolbar }) => {
    return (
        <>
            <WindowHeader>
                {header}
            </WindowHeader>
            <Toolbar style={{display: toolbar ? 'flex' : 'none' }}>
                <Button
                    flat
                    size="sm"
                >
                File
                </Button>
                <Button
                    flat
                    size="sm"
                    onClick={handleLogOut}
                    style={{display: logout ? 'block' : 'none' }}
                >
                Logout
                </Button>
            </Toolbar>
        </>
    );
}

export default WindowBar;