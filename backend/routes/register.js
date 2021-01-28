const router = require('express').Router();
const Register = require('../models/register.model');
let register = require('../models/register.model');

router.route('/add').post((req, res)=>{
    const fullname = req.body.fullname;
    const country = req.body.country;
    const  contact_number = req.body.contact_number;
    const email_id = req.body.email_id;
    const city = req.body.city;

    const newRegister = new Register({
        fullname,
        country,
        contact_number,
        email_id,
        city,
    });
    
    newRegister.save()
    .then(() => res.json("Register successfully"))
    .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router;