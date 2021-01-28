import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom'






import axios from 'axios';

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

function Register(props) {
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
     
      
     
          
          <form onSubmit={onSubmit}>
          <h2 style={{textAlign:'center',color:'#376EE6'}}>Free Registration</h2>

      <TextField style={{width:'50%'}} id="standard-basic" label="Fullname" required value={form.fullname} name='fullname' onChange={onChange} /><br/>
      <TextField style={{width:'50%'}} id="standard-basic" label="Country" required value={form.country} name='country' onChange={onChange} /><br/>
      <TextField style={{width:'50%'}} id="standard-basic" label="Contact number" required value={form.contact_number} name='contact_number' onChange={onChange} /><br/>
      <TextField style={{width:'50%'}} id="standard-basic" label="Email Id" required value={form.email_id} name='email_id' onChange={onChange} /><br/>
      <TextField style={{width:'50%'}} id="standard-basic" label="City" required value={form.city} name='city' onChange={onChange} /><br/><br/>

        
      <Button type='submit' variant="contained" color="primary" style={{width:'30%'}}>
  SUBMIT
</Button>
&nbsp;
<NavLink to='/'>
<Button  variant="contained" color="secondary" style={{width:'30%'}}>
  go back
</Button>
</NavLink>
      </form>
         
       
  
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    </div>
  );
}

export default Register;
