import React, { useState } from "react";
import coursesData from "./coursesData";
import { Link } from "react-router-dom";
const CourseList = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [courses, setCourses] = useState(coursesData);

  const handleSearch = (event) => {
    setSearchFilter(event.target.value);
    // Update the courses state based on the search filter.
    // You can use .filter() to filter courses based on course name or instructor.
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for courses..."
        value={searchFilter}
        onChange={handleSearch}
      />
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
