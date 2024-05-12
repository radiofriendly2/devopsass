import React from 'react'
import CourseItems from './CourseItems'

export default function Courses({ courses }) {

    const groupedCourses = courses.reduce((result, course, index) => {
        const chunkIndex = Math.floor(index / 6);

        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }

        result[chunkIndex].push(course);

        return result;
    }, []);
    return (
        <div className='container text-center'>
            <h1 className='my-3'>Education</h1>
            <div className='container text-center'>
                {groupedCourses.map((courseGroup, rowIndex) => (
                    <div className='row' key={rowIndex}>
                        {courseGroup.map((course) => (
                            <CourseItems
                                key={course.id}
                                name={course.name}
                                courseCode={course.courseCode}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
