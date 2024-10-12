const mongoose = require('mongoose')

const LibrarySchema = new mongoose.Schema({
  libraryName: {
    type: String,
    required: true,
  },
  // does it need its own?
  // libraryId: {
  //   type: String,
  //   required: false,
  // },
  libraryNumber:{
    type: String,
    required: false,
  },
  libraryAddress:{
    type: String,
    required: true,
  },
  libraryHours:{
    type: Array,
    required: false,
  },
  // array of tutors who work here? or no
  tutors:{
    type: Array,
    required: false,
  }
})

module.exports = mongoose.model('Library', LibrarySchema)
