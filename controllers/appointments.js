const Appointment = require('../models/Appointment')
module.exports = {
    getForm: (req,res)=>{
        // render all the info from tutors ejs into the booking.ejs page
       res.render('booking.ejs')
        // need to pass in all appointment details here so that it can save to the createappointment method
    },
    createAppointment: (req,res)=>{
        //appointment time comes from..
        
        res.render('booking.ejs')
        // grab the appointment time 
        // save it to user.appointments array
        // change appointment booked boolean to true
        // render the confirm page with the date, time, library, tutor
    },
    getConfirmation: (req,res)=>{
        res.render('confirm.ejs')
        // might not need this ^ might just need to render it like above and no more access to this page,
        //they details will just show up on the users progile
    },
    deleteAppointment: (req,res)=>{
        res.render('confirm.ejs')
        // would need to delete from user's booked appts array, AND change the appoints booked to false, && change the bookedUser to undefined again (or null?)
    },
    getAppointment: async (req,res)=>{
        const appointments = await Appointment.find()
        const user = 'hi'
        try{
            res.render('aptsPage.ejs', {appointments: ['hi']})
 
            // might not need this, its just going to be viewable on the users profile
        }catch(err){
            console.log(err)
        }
        
    },


}