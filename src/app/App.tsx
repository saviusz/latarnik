import './App.css'
import CoursesTable from '../CoursesTable';
import { useCourses } from '../util/useCourses';

function App() {

  const courses = useCourses();
  const filteredCourses = courses.filter((course) => course.specs.length < 6);
  const sortedCourses = filteredCourses.sort((a, b) => {
    if (a.specs.length > 0 && b.specs.length > 0) return 0;
    if (a.specs.length === 0 && b.specs.length === 0) {
      return (a.optional?.length || 0) - (b.optional?.length || 0);
    }
    return b.specs.length - a.specs.length;
  });

  return <div>
    <h1>Latarnik Studencki</h1>
    <CoursesTable courses={sortedCourses}/>
  </div>
}

export default App
