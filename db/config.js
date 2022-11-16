const mongoose = require('mongoose')
 
const dbConnection = async() => {
    try{
        mongoose.connect(process.env.BD_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Succesfull connection')
    }
    catch (error)  {
        console.log(error);
        throw new Error('Error al inicializar la DB')
    }
}
 
 
module.exports = {
    dbConnection
}
