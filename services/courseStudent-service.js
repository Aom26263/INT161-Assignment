import { deleteCourseStudent, findCourseStudent } from '../repositories/courseStudent-repository.js'

export async function deleteCourseStudentRecord(courseId, studentId) {
    const courseStudent = await findCourseStudent(courseId, studentId);

    if (!courseStudent) {
        throw new Error('Course student record not found');
    }

    return await deleteCourseStudent(courseId, studentId);
}
