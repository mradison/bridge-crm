const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
  type: {
    type: String, 
    required: true, 
    trim: true,
  },
  subject: {
    type: String, 
    trim: true,
  },
  description: {
    type: String, 
    trim: true,
  },
  activitydate: {
    type: Date,
    default: Date.now,
  }, 
});



const Activity = model('Activity', activitySchema);

module.exports = Activity;