import React from 'react'
import '../css/course.css'
import { courseList } from '../data/courseDet'
import { Link } from 'react-router-dom'
const Course = () => {
    return (
        <>
        <div className="cyetitle">
            <h1>Explore Courses</h1>
            <p>Choose the Perfect Course for Your Career Growth Journey</p>
        </div>
        <div className="allcourse">
            {courseList.map((course)=>(
                <div className="bg" key={course.id}>
                    <div className="img-container">
                        <img src={course.courseimglink} alt={course.coursename} />
                    </div>
                    <div className="coudetail">
                        <h3>{course.coursecategory}</h3>
                        <h2>{course.coursename}</h2>
                        <p>{course.teacher.name}</p>
                        <div className="level">
                            <p>{course.courselevel}</p>
                            <p>{course.coursemaxpeople}</p>
                        </div>
                        <div className="cost">
                            <h5>{course.coursecost}</h5>
                            <Link to={`/course/${course.slug}`}>Check details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Course