import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export async function deleteCourseStudent(courseId, studentId) {
        return await prisma.CourseStudent.delete({
            where: {
                course_id_student_id: {
                    course_id: courseId,
                    student_id: studentId
                }
            }
        });
    }

export async function findCourseStudent(courseId, studentId) {
    return await prisma.CourseStudent.findUnique({
        where: {
            course_id_student_id: {
                course_id: courseId,
                student_id: studentId
            }
        }
    });
}