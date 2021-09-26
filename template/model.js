const modelTemplate = `import mongoose from 'mongoose'
const {{item.schemaName}} = new mongoose.Schema({
  /***
  Uncomment this section to define your own schema
  
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  hashed_password: {
    type: String,
    required: "Password is required"

  ***/

  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('{{item.modelName}}', {{item.schemaName}})`

exports.modelTemplate = modelTemplate