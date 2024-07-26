
import mongoose from 'mongoose';
import app from './app.js'
const port = 3000

//mongoose connection
// const mongoose = require('mongoose');
// import mongoose from 'mongoose';
// mongoose.connect('mongodb://127.0.0.1:27017/test');
// 2 chije hamesa hoti
// database connection may fail hota hai and database dusre continent me v rakha hoat hai



// databse call connection ke time fee use kare "()()"
// with the help of fee bahar ke enviroment pollute nahi hote hai
(async ()=>{
  try{
    // Database Connection
    await mongoose.connect('dbstring')
    console.log("Dtabse connectd sucessfully")

    // exprss ke pass bahut sare event listner hote hai
    app.on("eroor", (err)=>{
      console.log("ERROR:", err)
      throw err
    })

    // app.listen(port, () => {
    //   console.log(`Example app listening on port ${port}`)
    // })
    // if you dont want to callback "()" then define method
    const onListening = () => {
      console.log(`Listening on port ${port}`)
    }
    // now we have to give only refrence
    app.listen(port ,onListening)
  
  



  }catch(error){
    console.log("EROOR: ", err)
    throw err
  }
})()

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
