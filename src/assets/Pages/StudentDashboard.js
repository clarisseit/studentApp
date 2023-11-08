import React, { useState } from "react";

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      id: 1,
      name: "Enrolled Course 1",
      instructor: "Instructor 1",
      thumbnail: "course-thumbnail.jpg", 
      dueDate: "2023-12-31",
      progress: 50,
      isCompleted: false, 
    }
  ]);

  const markCourseCompleted = (courseId) => {
   
    const updatedCourses = enrolledCourses.map((course) =>
      course.id === courseId ? { ...course, isCompleted: true } : course
    );
    setEnrolledCourses(updatedCourses);
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <img src={course.thumbnail} alt="Course Thumbnail" />
            <p>Due Date: {course.dueDate}</p>
            <progress value={course.progress} max="100"></progress>

            {course.isCompleted ? (
              <p>Course Completed</p>
            ) : (
              <button onClick={() => markCourseCompleted(course.id)}>
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
