const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,    
    trim: true,
  }, 
  description: {
    type: String, 
    trim: true,
  }, 
});



const Group = model('Group', groupSchema);

module.exports = Group;