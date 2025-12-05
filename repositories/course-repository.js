import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export async function getCoursesBySubjectId(subjectId) {
    return await prisma.Courses.findMany({
        where: {
            subject_id: subjectId
        },
        include: {
            subject: true,
            enrollments: {
                include: {
                    student: true
                }
            }
        }
    });
}

export async function createCourse(subjectId, year) {
    return await prisma.Courses.create({
        data: {
            subject_id: subjectId,
            year: year
        },
        include: {
            subject: true
        }
    });
}

export async function findCourseBySubjectAndYear(subjectId, year) {
    return await prisma.Courses.findFirst({
        where: {
            subject_id: subjectId,
            year: year
        }
    });
}
