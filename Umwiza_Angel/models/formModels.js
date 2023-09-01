const mongoose = require("mongoose")

const KycformSchema = new mongoose.Schema ({
    firstname:{
        type : String,
        required: true,
        trim: true,
    },
    lastname:{
        type : String,
        required: true,
        trim: true,
    },
    date:{
        type : String
    }, 
     gender:{
        type: String
    },
  country:{
        type: String
    },
  
   state:{
        type : String
    },
   town:{
        type : String
    },
    zipcode:{
        type : String
    },
   phonenumber1:{
        type : String
    },
    
   phonenumber2:{
        type : String
    },
    email:{
        type : String
    }

    
   
   
    
});


module.exports = mongoose.model("Kycform",KycformSchema)

