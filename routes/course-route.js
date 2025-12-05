import express from 'express';
import { getCoursesBySubjectId, addNewCourse } from '../controllers/course-controller.js';

const router = express.Router();

router.get('/subjects/:id/courses', getCoursesBySubjectId);
router.post('/courses', addNewCourse);

export default router;