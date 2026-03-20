import './App.css'
import { useCourses } from '../util/useCourses';
import CoursesTable from '../components/CoursesTable';
import Hero from '../components/Hero';

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
    <Hero />
    <CoursesTable courses={sortedCourses}/>
  </div>
}

export default App
