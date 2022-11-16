/**
 * title
 * certificate
 * link
 * repo
 * description
 * instructor
 * comments?
 */

 const {Schema,model} = require('mongoose');
 
 
 const CourseSchema = Schema({
     title: {
         type:String,
         required:true
     },
     certificate: {
        type:String,
        required:false
     },
     link: {
         type:String,
         required:true,
     },
     repo: {
        type:[String],
        required:false
     },
     description: {
        type:String,
        required:true
     },
     instructor: {
         type:String,
         required:true
     },
     image: {
        type:String,
        required:false
    },

 })
  
  
 module.exports = model('Course',CourseSchema);



 