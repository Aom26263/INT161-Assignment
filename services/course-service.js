import { getCoursesBySubjectId, createCourse, findCourseBySubjectAndYear } from '../repositories/course-repository.js'
export async function getCoursesBySubjectIdService(subjectId) {
        return await getCoursesBySubjectId(subjectId);
    }

export async function addCourse(subjectId, year) {
    const existingCourse = await findCourseBySubjectAndYear(subjectId, year);

    if (existingCourse) {
        throw new Error('Course already exists for this subject in this year');
    }

    return await createCourse(subjectId, year);
}
