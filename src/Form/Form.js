import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../download.JPEG'
import Features from '../Features/Features'

import Foundation from '../Foundation'
import Usp from '../Usp'
import Topperspeak from '../Topperspeak'

import Onlinesupport from '../Onlinesupport/Onlinesupport'


import './Form.css'


import axios from 'axios';
import { NavLink } from 'react-router-dom';

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

function Form(props) {
  const [form, setForm] = useState({
    fullname:'',
    country:'',
    contact_number:'',
    email_id:'',
    city:'',
  });
  const classes = useStyles();

 const onChange= (e)=>{
   setForm({
     ...form,
     
     [e.target.name]: e.target.value
  
  
 
})
console.log()
 }

 const onSubmit= (e)=>{
   e.preventDefault();
   const register={
    fullname:form.fullname,
    country:form.country,
    contact_number:form.contact_number,
    email_id:form.email_id,
    city:form.city,

   }

   console.log(register);

   axios.post('http://localhost:5000/register/add', register)
   .then(res => console.log(res.data));
    

 }
  return (
    <div >
      <div>
      <h1>
        <span style={{color:'#CF1322'}}>
          APT 
        </span>
        <span style={{color:'#376EE6'}}>
        &nbsp; GRAND ONLINE SCHOLARSHIP TEST
        </span>
      </h1>
      </div>
      
      <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6} >
           <h2 style={{textAlign:'center',color:'#CF1322'}}>AGST 20-21</h2>
        <p>APT provides opportunity of 100% Scholarship Test <br/>through AGST-APT Grand Scholarship Test,every year</p>
        <p>Its 10th sucessful year of conducting AGST</p>
        <p>Test will be conducted online on 22nd December,2019<br/>
        (Sunday) for Class 10th, 11th, & 12th students @ 1:00pm</p>
        <p>For giving test, get yourself registered on ********** and 
          <br/>you will receive Roll No. & link for AGST
        </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          
          <form onSubmit={onSubmit}>
          <h2 style={{textAlign:'center',color:'#376EE6'}}>Free Registration</h2>

      <TextField style={{width:'50%'}} id="standard-basic" label="Fullname" required value={form.fullname} name='fullname' onChange={onChange} /><br/>
      <TextField style={{width:'50%'}} id="standard-basic" label="Country" required value={form.country} name='country' onChange={onChange} /><br/>
      <TextField style={{width:'50%'}} id="standard-basic" label="Contact number" required value={form.contact_number} name='contact_number' onChange={onChange} /><br/>
      <TextField style={{width:'50%'}} id="standard-basic" label="Email Id" required value={form.email_id} name='email_id' onChange={onChange} /><br/>
      <TextField style={{width:'50%'}} id="standard-basic" label="City" required value={form.city} name='city' onChange={onChange} /><br/><br/>

        
      <Button type='submit' variant="contained" color="primary" style={{width:'50%'}}>
  SUBMIT
</Button>
      </form>
         
        </Grid>
       
        <Grid item xs={12} sm={6} >
        
        <h2 style={{textAlign:'center',color:'#CF1322'}}>ABOUT APT</h2>
        <p>APT is Biggest Commerce, CA, CS institute in Central<br/>
        India and soon be biggest for Science, LAW &<br/>
        Competition Exam also<br/>
        <br/>
        APT has produced maximum rankers in Class 12, CA & CS</p>
        </Grid>
        
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>

      <Grid container spacing={3}>
      <Grid item xs={12}>
      <h1>
        <span style={{color:'#376EE6'}}>
          ONLY 
        </span>
        <span style={{color:'#CF1322'}}>
        &nbsp; INSTITUTE IN BHOPAL TO GIVE 
        </span>
        <span style={{color:'#376EE6'}}>
        &nbsp;AIRS
        </span>
        <span style={{color:'#CF1322'}}>
        &nbsp; AT 
        </span>
        <br/>
        <span style={{color:'#376EE6'}}>
          EXECUTIVE
        </span>
        <span style={{color:'#CF1322'}}>
        &nbsp; LEVEL
        </span>
      </h1>
        </Grid>
        <Grid item xs={12} sm={4} >
          <img src={logo}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={logo}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={logo}/>
        </Grid>
        </Grid>
      

    </div>
    <Features/>
      <Foundation/>
      <Onlinesupport/>
      <Usp/>
      <Topperspeak/>
     
    
    
    </div>
  );
}

export default Form;
