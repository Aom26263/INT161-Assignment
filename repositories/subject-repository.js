import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
export async function getAllSubjectsWithCourses(
    skip = 0,
    take = 10,
    orderBy = { id: 'asc' }
) {
    try {
        const subjects = await prisma.subjects.findMany({
            skip,
            take,
            orderBy,
            include: {
                courses: true
            }
        });
        return subjects;
    } catch (error) {
        console.error('Error fetching subjects:', error);
        throw new Error('Failed to fetch subjects');
    }
}

export async function countSubjects() {
    try {
        return await prisma.subjects.count();
    } catch (error) {
        console.error('Error counting subjects:', error);
        throw new Error('Failed to count subjects');
    }
}