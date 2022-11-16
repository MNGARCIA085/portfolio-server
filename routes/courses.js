const { Router } = require('express');
const { listCourses, addCourse, courseDetail, editCourse, deleteCourse } = require('../controllers/courses');

const router = Router();




// todos los cursos
router.get('/',listCourses);


// agregar un curso
router.post('/', addCourse);

// un curso
router.get('/:id',courseDetail);


// editar un curso
router.put('/:id',editCourse);


// borrar un curso
router.delete('/:id',deleteCourse);



// lo exporto
module.exports = router;