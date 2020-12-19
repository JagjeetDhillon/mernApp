import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EventIcon from '@material-ui/icons/Event';


const useStyles = makeStyles({
    table: {
        minWidth:650,
    },
    dateIcon:{
        marginTop:'0px'
    }
});

function createData(date, exersiceType, duration) {
    return { date, exersiceType, duration };
  }

  const rows =[
      createData('Dec 1, 2020','Walk', 1)
  ]

const Content =() =>{

    const classes = useStyles();
    return(
        <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
                <div className = {classes.dateIcon}>
                <EventIcon/>
                </div>
                </TableCell>
            <TableCell align="right">Exersice Type</TableCell>
            <TableCell align="right">Duration&nbsp;(Hours)</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.exersiceType}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right"><EditIcon/></TableCell>
              <TableCell align="right"><DeleteIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );

}
export default Content;