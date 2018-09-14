import {AppBar, Toolbar, Typography} from '@material-ui/core';
import * as React from 'react';
import {Link} from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static" style={{backgroundColor: '#5580B3'}}>
                <Toolbar>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/">Weather Time</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}
