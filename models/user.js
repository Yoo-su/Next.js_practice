import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let user = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  since: {
    type: Date,
    default: Date.now
  }
});

mongoose.models = {};

let User = mongoose.model('User', user);

export default User;