import React from 'react';
import { WindowHeader, Button, Toolbar } from 'react95';

const WindowBar = ({ header, handleLogOut }) => {
    return (
        <>
            <WindowHeader>
                {header}
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
                    onClick={handleLogOut}
                >
                Logout
                </Button>
            </Toolbar>
        </>
    );
}

export default WindowBar;