import { useState, useEffect } from "react";
import { type Course, courseList } from "../model/course";

export function useCourses() {
    let [courses, setCourses] = useState<Course[]>([]);
    
      useEffect(() => {
        const fetchData = async () => { 
          const coursesFile = await fetch("courses-reduced.json");
          console.log(coursesFile);
          const coursesRawData = await coursesFile.json();
          const courses = courseList.parse(coursesRawData.courses);
          setCourses(courses);
        }
        fetchData();
      }, [])

    return courses;
}