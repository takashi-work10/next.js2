import mongoose from "mongoose" 

const connectDB = () => {try{ 
mongoose. connect("mongodb+srv://takashiyamada0606:AsnTzY2ugdFw9EFN@cluster0.lrmou.mongodb.net/nextMarket15Data?retryWrites=true&w=majority&appName=Cluster0") 
console. log("Success: Connected to MongoDB") 
}catch(err){ 
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()
} } 

export default connectDB