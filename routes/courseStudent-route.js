import express from 'express';
import { deleteCourseStudent } from '../controllers/courseStudent-controller.js';

const router = express.Router();

router.delete('/students/:studentId/courses/:courseId', deleteCourseStudent);

export default router;