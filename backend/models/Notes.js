const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
       type :String,
       required:true
    },
    description:{
        type :String,
        default:"General"
     },
     tag:{
        type :String,
        required:true,
        unique:true
     },
     date:{
        type:Date,
        default:Date.now
     },
  });
  module.exports=mongoose.model('notes',NotesSchema);