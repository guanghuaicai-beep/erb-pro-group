import React from 'react'
import {courseList} from '../data/courseDet';
import { useParams, Link } from 'react-router-dom';
import '../css/coursedetail.css'
const CourseDetail = () => {
    const { slug } = useParams();
    const currentCourse = courseList.find(item=>item.slug===slug);
    if(!currentCourse){
        return(
            <div>
                <h1>抱歉，該課程不存在</h1>
                <Link to="/course">返回課程列表</Link>
            </div>
        );
    }
    return (
    <>
        <div className="coursetop">
            <div className="left">
                <h3>{currentCourse.coursecategory}</h3>
                <h1>{currentCourse.coursename}</h1>
                <p>{currentCourse.coursedetail}</p>

                <ul className="iconps">
                    <li><i className={currentCourse.courseicon}></i>{currentCourse.courseduration}</li>
                    <li><i className={currentCourse.courseicon}></i>{currentCourse.coursemodel}</li>
                    <li><i className={currentCourse.courseicon}></i>{currentCourse.courselevel}</li>
                </ul>
            </div>
            <div className="courseright">
                <h1>{currentCourse.coursecost}</h1>
                <div className="btn">
                    <a href="" className="btn1"><i className="fa-regular fa-heart"></i>Add to Cart</a>
                    <a href="" className="btn2"><i className="fa-regular fa-heart"></i>My Favourite</a>
                </div>
                <div className="coursefooter">
                    <div>
                        <p>Course Start Date</p>
                        <p>{currentCourse.coursestartdate}</p>
                    </div>
                    <div>
                        <p>Time</p>
                        <p>{currentCourse.coursestartclasstime}</p>
                    </div>
                    <div>
                        <p>Capacity</p>
                        <p>{currentCourse.coursemaxpeople}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="detail">
            <div className="requirement">
                <h2>Requirements</h2>
                <ul>
                    <li><i className="fa-regular fa-heart"></i>{currentCourse.courserequirement1}</li>
                    <li><i className="fa-regular fa-heart"></i>{currentCourse.courserequirement2}</li>
                    <li><i className="fa-regular fa-heart"></i>{currentCourse.courserequirement3}</li>
                </ul>
            </div>
            <div className="teacher2">
                <h2>About Tutor</h2>
                <div className="teatail">
                    <h3>{currentCourse.teacher.name}</h3>
                    <h4>{currentCourse.teacher.position}</h4>
                    <p>{currentCourse.teacher.experience}</p>
                </div>
            </div>
            <div className="student">
                <h2>Reviews</h2>
                {currentCourse.reviews.map((review,index)=>(
                    <div className="studetail" key={index}>
                        <div className="top">
                            <h4>{review.name}</h4>
                            <div>
                                {Array.from({length:5}).map((_,starIdx)=>
                                    <i key = {starIdx} class = {starIdx<review.star ? "fa-solid fa-heart" : "fa-regular fa-heart" }>
                                    </i>
                                )}
                            </div>
                        </div>
                        <p>{review.time}</p>
                        <h5>{review.content}</h5>
                    </div>
                ))}
            </div>
            <div className="courselink">
                <i className="fa-regular fa-file-pdf"></i>
                <a href={currentCourse.coursepdflink || "courselinkcs.pdf"}>Course Syllabus</a>
                <i className="fa-solid fa-download"></i>
            </div>
        </div>
        </>
    )
}

export default CourseDetail