const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/Facebook")
.then(()=>{
    console.log("connected");
    
})
.catch((err)=>{
    console.log("error:",err);
    
})
const nameSchema = new mongoose.Schema({
    name:String,
    password:String,
    
});
module.exports = mongoose.model("Name",nameSchema)