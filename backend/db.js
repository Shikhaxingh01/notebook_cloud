// const mongoose=require('mongoose');
// const mongoURI= "mongodb://localhost:27017"
// const connectToMongo=()=>{
//     mongoose.connect(mongoURI,function () {
//             console.log("Connected to mongodb Successfully");
//         })
// }
// module.exports= connectToMongo;

const mongoose = require("mongoose");
const mongoURI= "mongodb://localhost:27017/inotebook";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;


