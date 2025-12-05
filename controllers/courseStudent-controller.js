import { deleteCourseStudentRecord } from '../services/courseStudent-service.js'

export async function deleteCourseStudent(req, res) {
    try {
        const courseId = parseInt(req.params.courseId);
        const studentId = parseInt(req.params.studentId);

        if (isNaN(courseId) || isNaN(studentId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid course ID or student ID'
            });
        }

        await deleteCourseStudentRecord(courseId, studentId);

        res.status(200).json({
            success: true,
            message: 'Course student deleted successfully'
        });
    } catch (error) {
        if (error.message === 'Course student record not found') {
            return res.status(404).json({
                success: false,
                message: error.message
            });
        }

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}