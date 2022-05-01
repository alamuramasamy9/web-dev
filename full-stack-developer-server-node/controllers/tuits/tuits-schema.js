import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  topic: String,
  username: String,
  verified : Boolean,
  time : String,
  title : String,
  tuit : String,
  handle: String,
  attachments : {
    video : String
  },
  logoImage : String,
  avatarImage : String,
  likes: Number,
  dislikes: Number,
  comments: Number,
  retweets: Number
}, {collection: 'tuits'});
export default schema;
