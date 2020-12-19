import React from 'react';
import {Grid, Typography, makeStyles,Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme)=>({
    root:{
        '& > *':{
            margin: theme.spacing(1),
            width: '14.5ch',
        },
    },
    button: {
        margin: theme.spacing(1),
      },
    addButtionStyle: {
        marginTop: '30px'
    },
}));

const AddExc =() => {
    const classes = useStyles();
    return(
        <Grid item container>
            
            <form className={classes.root} noValidate autoComplete="off">
            
            <TextField id="date" label="Date" />
            
        
            
            <TextField id="exercise" label="Exercise Type" />
            
        
            
            <TextField id="duration" label="Duration (hr)" />
        
    </form>
     
    
    <div className = {classes.addButtionStyle}><AddBoxIcon/></div>
    </Grid>
    );
}
export default AddExc;
