import React from 'react';
import Course from './Course';
import { getAll } from '@/model/Courses';

function RecentCourses({ courses }) {
  const img = React.useMemo(() => 'https://picsum.photos/466/200?change=', []);

  return (
    <>
      {courses.map((course) => (
        <div className="col-md-6" key={course.id}>
          <Course course={course} key={course.id} img={img} />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const courses = await getAll();
  return {
    props: {
      courses,
    },
  };
}

export default React.memo(RecentCourses);
