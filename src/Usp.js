import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './download.JPEG'
import {NavLink} from 'react-router-dom';


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


const Usp=()=>{
    const classes = useStyles();
    return(
<div className={classes.root}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

<Grid container spacing={3}>
  
  <Grid item xs={12} sm={6} >
     <h2 style={{textAlign:'center',color:'#CF1322'}}>USP (unique selling point)</h2>
  <p>APT provides opportunity of 100% Scholarship Test <br/>through AGST-APT Grand Scholarship Test,every year</p>
  <p>Its 10th sucessful year of conducting AGST</p>
  <p>Test will be conducted online on 22nd December,2019<br/>
  (Sunday) for Class 10th, 11th, & 12th students @ 1:00pm</p>
  <p>For giving test, get yourself registered on ********** and 
    <br/>you will receive Roll No. & link for AGST
  </p>
  </Grid>
  <Grid item xs={12} sm={6}>
    
 <img src={logo}/>
   
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

export default Usp;