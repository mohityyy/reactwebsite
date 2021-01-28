import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
  },
}));

export default function Foundation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <br/>
      <br/><br/>
      <br/>
        <div>
      <h1>
        <span style={{color:'#376EE6'}}>
          CS FOUNDATION 
        </span>
        <span style={{color:'#CF1322'}}>
        &nbsp; DEC 2019 RESULTS
        </span>
      </h1>
      </div>
      <br/>
      <br/>
      <Grid container spacing={3} style={{justifyContent:'center'}}>
      <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
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
      <div >
          <br/>
          <br/>
          <br/>
          <br/>
      <h1 >
        <span style={{color:'#CF1322'}} >
          STRONGEST FACULTY TEAM IN CENTRAL INDIA
        </span>
        <span style={{color:'#376EE6'}}>
        &nbsp;IN CENTRAL INDIA
        </span>
      </h1>
      </div>
      <br/>
          <br/>
      <Grid container spacing={3} style={{justifyContent:'center'}}>
      <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
        </Grid>
        <Grid item xs={6} sm={3} >
          <img src={logo} style={{width:'60%'}}/>
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
  );
}
