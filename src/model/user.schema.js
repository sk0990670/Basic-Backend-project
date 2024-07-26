// firstly we have to define schema kiske liye ban raha hai
//request ,response or databse ke liye ban raha hai


// here we create schema for databse
import mongoose from "mongoose";
// go to documnetation of mongoose and schema and whrre search model
const userSchema = new mongoose.Schema(
    { name: {
        type:String,
        required: [true,'Name is required'],
        // agar koi databse me name nahi dega to wo save nahi hoga chahe jo email password kyu na fill kare
        // and custom error milega Name is required.
        maxLength: [50,"Name should be less than 50 character"]
    },
    // name: String, 
        email: {
            type: String,
            unique: true
        },
        username: {
            type:String,
            unique:true
        },    
        password:String,
        age: Number,
    }
);
// har schema ka apna name hota hai(here userSchema)


// now export schema(kis structure me aapka data save hoga)
// mongoose ki sachema ko export karne ke liye mongoose ko hi export karn apdta hai

export default mongoose.model("User",userSchema)
// model ke andar aati hai 2 values
// schema name:---database me jo name save hoga wo yaha diya jat hai
// nad ye database me pulral ho jata hai automatically
//eg: product inside data base become products

// 2nd Schema kaisa hoga:--i.e userSchema ki tarh hoga