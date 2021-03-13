import mongoose from 'mongoose';

/*
연결 DB가 존재하면 그것을 사용하고 없다면 새로운 db연결을 만든다.
*/ 

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    console.log('already connected! ^^v');
    // Use current db connection
    return handler(req, res);
  }

  // Use new db connection
  await mongoose.connect(process.env.mongodburl, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useNewUrlParser: true
  }).then(res=>{console.log("connect Success!")});
  return handler(req, res);
};

export default connectDB;