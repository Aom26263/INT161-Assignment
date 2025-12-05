import { getAllSubjectsWithCourses, countSubjects } from '../repositories/subject-repository.js'

export async function getAllSubjects(page = 1, limit = 10, sortBy = 'id', sortOrder = 'asc') {
    const skip = (page - 1) * limit;
    const orderBy = { [sortBy]: sortOrder };

    const subjects = await getAllSubjectsWithCourses(
        skip,
        limit,
        orderBy
    );

    const total = await countSubjects();

    return {
        data: subjects,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
}