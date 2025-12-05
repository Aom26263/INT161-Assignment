import { getAllSubjects } from '../services/subject-service.js'
export async function getAllSubjectsWithCourses(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const sortBy = req.query.sortBy || 'id';
        const sortOrder = req.query.sortOrder || 'asc';

        const result = await getAllSubjects(
            page,
            limit,
            sortBy,
            sortOrder
        );

        res.status(200).json({
            success: true,
            ...result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}