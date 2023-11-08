import React from "react";

const CourseDetails = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Status: {course.status}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites}</p>
      <details>
        <summary>Syllabus</summary>
        <p>{course.syllabus}</p>
      </details>
    </div>
  );
};

export default CourseDetails;
