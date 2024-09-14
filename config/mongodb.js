const mongoose = require('mongoose');
const mongodb = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDb connected');
    
    
  } catch (error) {
    console.log(error.message);
    
  }
}
  module.exports=mongodb;