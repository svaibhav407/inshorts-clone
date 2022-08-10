import mongoose from "mongoose";


const connection = async (url) => {

    try{
      await mongoose.connect(url, {useNewUrlParser: true});
     console.log("database connected successfully");
    }
    catch(error){
          console.log(error);
    }
}


export default connection;