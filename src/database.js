const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

export async function connect(){
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('>>>DB is connected');
    }catch(e){
        console.log('>>>Something went wrong');
        console.log(e);
    }
}

