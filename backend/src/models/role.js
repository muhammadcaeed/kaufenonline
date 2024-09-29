import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const RoleSchema = new Schema({
  role_name: {
    type: String,
    enum : ['buyer', 'seller', 'admin']
  },
});

module.exports = mongoose.model('Role', RoleSchema);