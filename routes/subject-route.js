import express from 'express';
import { getAllSubjectsWithCourses } from '../controllers/subject-controller.js';

const router = express.Router();

router.get('/subjects', getAllSubjectsWithCourses);

export default router;
