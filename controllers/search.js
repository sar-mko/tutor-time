const Library = require('../models/Library');
const Tutor = require("../models/Tutor");
const Appointment = require('../models/Appointment')
// might not need this
module.exports = {
    // need to go to like an admin dashboard two of all the libraries and tutors, maybe the same page

    getIndex: async (req,res) => {
     try {
         const libraries = await Library.find()
         const tutors = await Tutor.find()
         res.render('search.ejs', {data:libraries, allTutors:tutors, message: false })
     }
     catch (err){
         console.log(err)
     }
       
     },

addLibrary : async (req,res) => {
    // console.log('req allerttt' , req)
    console.log(req.body)
    console.log(req.params)
    const name = req.body.libraryName
    // const user = req.body.
    const number = req.body.libraryNumber 
    const address = req.body.libraryAddress
    const startLib = req.body.libOpen
    const endLib = req.body.libClosed
    // const address = req.body.libraryNumber 
    try{
        // console.log(req.body)
        await Library.create({
            libraryName: name,
            libraryNumber: number,
            libraryAddress: address,
            libraryHours: [startLib, endLib],
            // libraryAddress: address
          });

        res.redirect('/search')
 
    }catch(err){
        console.log(err)
    
    }
},

addTutor : async (req,res) => {
    // console.log('req allerttt' , req)
    console.log(req.body)
    console.log(req.params)

    const name = req.body.tutorName
    const email = req.body.tutorEmail
    const libraries = await Library.find()
    const tutors = await Tutor.find()
    try{

        await Tutor.create({
            tutorName: name,
            tutorEmail: email,
            // tutorHours: [start, end],
            // libraryAddress: address
          });
          res.render('search.ejs', {data:libraries, allTutors:tutors,message:"nice"});
 
    }catch(err){
        console.log(err)
        res.render('search.ejs', {data:libraries, allTutors:tutors,message:"fAIL"});
    }
},
 addSchedule : async (req,res) => {
//     // console.log('req allerttt' , req)
    console.log(req.body , req.body.tutorId)
    //grab it from form on the body , its name is tutorId
    const user = req.body.tutorId
//     console.log(req.params)
//     const name = req.body.libraryName
//     // const user = req.body.
//     const number = req.body.libraryNumber 
//     const address = req.body.libraryAddress
//     const startLib = req.body.libOpen
//     const endLib = req.body.libClosed
//     // const address = req.body.libraryNumber 
    try{
        // console.log(req.body)
        // const cursor = db.collection('inventory').find({
        //     'size.uom': 'in'
        //   });
        // https://www.mongodb.com/docs/manual/tutorial/query-embedded-documents/

        // find it in Tutor w tutor id and upate the tutors days and time properties, and library ids available
        await Tutor.updateOne(
            { _id: user },

            {
                $set: { "schedule.days.$[date]": new Date('2024-09-15') }, // New date
                $currentDate: { lastModified: true },
              }



            //     $set: { "schedule.$[type].days" : 100 , status: 'P' },
            //     $currentDate: { lastModified: true },

            //     date: req.body.date,
            //     time: number,
            //     tutorId: address,
            //     libraryId: [startLib, endLib],
            //   }
           
            // libraryAddress: address
          );
          console.log('it works')
        res.redirect('/search')
 
    }catch(err){
        console.log(err)
    
    }
}
 
}