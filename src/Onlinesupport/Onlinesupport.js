import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
 
}));

const Onlinesupport = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <h1>
        
        <span style={{color:'#376EE6'}}>
          <br/>
          <br/>
          <br/>
          <br/>
        &nbsp; ONLINE SUPPORT
        </span>
      </h1>
      <br/>
      <br/>
            
            <Grid container spacing={5} style={{width:'100%', margin:'5%'}}>
              
            <Grid item xs={12} sm={4}>
          
            <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ONLINE" secondary="Video Lectures" />
      </ListItem>
         
       
          
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="RANK TEST" secondary="Series" />
      </ListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="FB LIVE" secondary="Doubt Crearing Sessions" />
      </ListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="UNLIMITED" secondary="Practice Questions" />
      </ListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="PERFORMANCE" secondary="Analytics" />
      </ListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="SHORT NOTES" secondary="with Examples" />
      </ListItem>
        </Grid>
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>
        <NavLink to='/register'>
        <Button type='submit' variant="contained" color="primary" style={{width:'40%'}}>
  REGISTER NOW
</Button></NavLink>
        </div>
    )
}

export default Onlinesupport;