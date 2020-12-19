import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(()=>({
    typographyStyle: {
        flex: 1
    }
}));

function Header () {
    const classes = useStyles();

        
        return(
            <Grid container direction="column">
                <Grid item container>
                  <Grid item xs={12}>
                        <AppBar position="static">
                        
                            <Toolbar>
                                <Typography className= {classes.typographyStyle} >
                                    Exersice Monitor
                                </Typography>
                                <AccountCircleIcon/>
                            </Toolbar>
                            
                        </AppBar>
                  </Grid>

            
                </Grid>
        
            </Grid>
        );
    
}
export default Header;