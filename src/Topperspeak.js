import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './download.JPEG'
import {NavLink} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      border:'0px',
  
    },
  }));


const Topperspeak=()=>{
    const classes = useStyles();
    return(
<div className={classes.root}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

<img src={logo}/>

<h1>THEY SAY</h1>
<div>
      <p>
        <span style={{fontSize:'60px'}}>
        ❝
        </span>
        <span style={{fontSize:'20px'}}>
        They got the best faculty, courses, environment, and study material. Don't ask<br/>
        "why choose APT ?" when you look at their history and achievements ask "how<br/>
        can you choose APT?" YES WE CAN !!<br/>
        <br/>
        Avni Mishra 1st AIR-CS
        </span>
      </p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      <h1>ENSURE YOUR AIR<br/>
      <br/>
      IN CA FOUNDATION, MAY'20 ATTEMPT</h1>
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

export default Topperspeak;