import mongoose from "mongoose";


const Connection = async(username, password) =>{
    
    const URL = `mongodb+srv://${username}:${password}@cluster0.tq2ah8n.mongodb.net/Wanderlust_Wonders?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true, });
        console.log("Db Connection Successful");
    }catch(error){
        console.log('Connection Error with Database', error);
    }
}

export default Connection;