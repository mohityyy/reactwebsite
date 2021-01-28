import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../download.JPEG';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './Features.css'
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
 
}));

const Features = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <h1>
        
        <span style={{color:'#376EE6'}}>
          <br/>
          <br/>
          <br/>
          <br/>
        &nbsp; FEATURES
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
        <ListItemText primary="TIMELY" secondary="Course Comletion" />
      </ListItem>
         
       
          
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="24/7" secondary="Doubt Clearing & Faculty support" />
      </ListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="2 REVISIONS" secondary="and 6 Mock Tests" />
      </ListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="DIGITAL LIBRARY" secondary="Facility at all Centres" />
      </ListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText  primary="HOSTEL" secondary="Facility" />
      </ListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='cd'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="HI-TECH" secondary="Classrooms with Audio Visual Aids" />
      </ListItem>
        </Grid>
        </Grid>
        <NavLink to='/register'>
        <Button type='submit' variant="contained" color="primary" style={{width:'40%'}}>
  REGISTER NOW
</Button></NavLink>
        </div>
    )
}

export default Features;