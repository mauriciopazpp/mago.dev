import React from 'react';
import Course from './Course';
import { getAll } from '@/model/Courses';

export default function RecentCurses({ courses }) {
  return (
    <>
      {courses.map((course) => (
        <div className="col-md-6" key={course.id}>
          <Course course={course} key={course.id} />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const courses = await getAll()

  return {
    props: {
      courses,
    },
  };
}
