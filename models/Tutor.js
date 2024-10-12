const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
  libraryId: {
    type: String,
    required: true,
  },
  days: {
    type: [Date],
    required: true,
  },
  hours: {
    type: String,
    required: true,
  }

})

const TutorSchema = new mongoose.Schema({
  tutorName: {
    type: String,
    required: true,
  },
  //all libraries work at
  tutorEmail: {
    type: String,
    required: true,
  },
  schedule:{
    type: LocationSchema,
    required: false,
  },
  // bookedAppts:{
  //   type: Array,
  //   required: false,
  // }
})

module.exports = mongoose.model('Tutor', TutorSchema)
