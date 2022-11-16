const {response} = require('express'); // para el tipado
const Course = require('../models/Course');
var mongoose = require('mongoose');





// list all courses
const listCourses = async (req, res) => {
    // capacidad de filtrar por title
    console.log(req.query.title);
    if (req.query.title){
        //query = {'title':/req.query.title/}
        //({userName:{ $regex: userName, $options:'i' } })
        query = { title: { $regex: req.query.title, $options:'i' } };
    }
    else {
        query = {}
    }
    /** con promise!!!!!
    Course.find(query)
        .then(data => {
            res.status(200).json({
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
        });
    });
    */
    try {
        const courses = await Course.find(query);
        return res.status(200).json(courses);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:err});
    }
}



// add a new course
const addCourse = async (req, res) => {
    const course = new Course(req.body);
    await course.save();
    // respuesta
    res.status(201).json(course);
}



// detail of a course
const courseDetail = async (req, res) => {
    try {
        const courseId = mongoose.Types.ObjectId(req.params.id);
        const course = await Course.find({'_id':courseId});
        return res.status(200).json(course);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
}


// edit a course
const editCourse = async (req, res) => {
    try {
        const courseId = mongoose.Types.ObjectId(req.params.id);
        const filter = {'_id':courseId};
        const course = await Course.findOneAndUpdate(filter,req.body);
        return res.status(201).json(course);
        //return res.status(201).json({'id':courseId});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
}


// delete a course
const deleteCourse = async (req, res) => {
    try {
        const courseId = mongoose.Types.ObjectId(req.params.id);
        const course = await Course.deleteOne({"_id":courseId});
        //return res.status(200).json(course);
        return res.status(200).json({'id':courseId});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
}




 

// exportamos
module.exports = {
   listCourses,
   addCourse,
   courseDetail,
   editCourse,
   deleteCourse
}
