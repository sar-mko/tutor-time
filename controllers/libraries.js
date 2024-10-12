const Library = require('../models/Library')
const Tutor = require('../models/Tutor')

module.exports = {
    getLibraries: async (req,res)=>{
        try{
            // const options =  await fetch(process.env.URL + '/public/libraries.json')
            // console.log(options)
            // const data = await res.json()
            // console.log(data)
            const libraryItems = await Library.find()
            res.render('libraries.ejs', {libraries: libraryItems})
        }
        catch(err){
            console.log(err)
        }
       
    },

    getTutors: async (req,res)=>{
        console.log(req.params)
        console.log(req.body)
        const id = req.params.id
        try{

            const tutorItems = await Tutor.find()
            const name = await Library.find({_id:id}).lean()
  
            console.log(tutorItems[2])
            console.log(tutorItems[2].schedule[0])
            res.render('tutors.ejs', {tutors: tutorItems, library: name})
            // https://dev.to/iamcymentho/demystifying-nested-data-a-guide-to-accessing-and-processing-objects-arrays-and-json-in-javascript-34im
        }
        catch(err){
            console.log(err)
        }

    }
}

