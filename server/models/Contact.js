const { Schema, model } = require('mongoose');
const Group = require('./Group')
const Activity = require('./Activity')

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,    
    trim: true,
  }, 
  nickname: {
    type: String, 
    trim: true,
  },
  email: {
    type: String,
    required: true,    
    trim: true,
  },
  company: {
    type: String,    
    trim: true,
  },
  title: {
    type: String,
    trim: true,
  },
  department: {
    type: String,   
    trim: true,
  },
  businessphone: {
    type: String, 
    trim: true,
  },
  mobilephone: {
    type: String,  
    trim: true,
  },
  address1: {
    type: String,   
    trim: true,
  },
  address2: {
    type: String,  
    trim: true,
  },
  city: {
    type: String,  
    trim: true,
  },
  state: {
    type: String,   
    trim: true,
  },
  country: {
    type: String,    
    trim: true,
  },
  zip: {
    type: String,  
    trim: true,
  },
  website: {
    type: String,   
    trim: true,
  },
  groupInfo: [{
    groupId: {
      type: Schema.Types.ObjectId, // Reference to the group _id
      ref: 'Group'
    },
    name: String, // Group name
    description: String // Group description
  }],
  activityInfo: [Activity.schema],
});



const Contact = model('Contact', contactSchema);

module.exports = Contact;