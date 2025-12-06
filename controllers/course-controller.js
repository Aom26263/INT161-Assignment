import { getCoursesBySubjectIdService, addCourse } from '../services/course-service.js'
export async function getCoursesBySubjectId(req, res) {
        try {
            const subjectId = parseInt(req.params.id);

            if (isNaN(subjectId)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid subject ID'
                });
            }

            const courses = await getCoursesBySubjectIdService(subjectId);

            res.status(200).json({
                success: true,
                data: courses
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

export async function addNewCourse(req, res) {
    try {
        const { subjectId, year } = req.body; //อันนี้มันรับที่ body ใน postman
        //const studentId = parseInt(req.params.studentId); รับที่ parameter ใน postman
        //const grades = parseFloat(req.body.grade); รับที่ body ใน postman

        if (!subjectId || !year) {
            return res.status(400).json({
                success: false,
                message: 'subjectId and year are required'
            });
        }

        const course = await addCourse(subjectId, year);

        res.status(201).json({
            success: true,
            data: course
        });

    } catch (error) {
        if (error.message === 'Course already exists for this subject in this year') {
            return res.status(409).json({
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
