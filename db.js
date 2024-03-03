const mongoose=require('mongoose')

const uri="mongodb+srv://wings:wwww@cluster0.epqncfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


                        
const connectDB=()=>{


    return mongoose.connect(uri,{

      
      useNewUrlParser: true,
      useUnifiedTopology: true,
     

    }).then(()=>{console.log("yes")}).catch(()=>{console.log("nooooo")})

    
}


 
module.exports=connectDB