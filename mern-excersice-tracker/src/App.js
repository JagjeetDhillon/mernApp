import logo from './logo.svg';
import {Button, Typography, makeStyles} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import Header from './Header';
import Content from './Content';
import AddExc from './AddExc';

function App() {
  
  return (
    
    <Grid container direction="column">
      <Header/>
      <Grid item container>
        <Grid item xs={0} sm={2}/>
          <Grid item xs={12} sm={8}>
            <AddExc/>
            <Content/>
          </Grid>
        <Grid item xs={0} sm={2}/>
        
      </Grid>
    </Grid>
  );
}

export default App;
