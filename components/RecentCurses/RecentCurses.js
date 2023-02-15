import React from 'react';
import 'firebase/firestore';
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Post from '../Posts/Post';

export default function RecentCurses({ courses }) {
  return (
    <div>
      {courses.map((course) => (
        <Post course={course} key={course.id} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(db, 'courses'));
  const courses = querySnapshot.docs.map((doc) => {
    const courseData = doc.data();
    const { title, description, image, tags, post } = courseData;
    return {
      id: doc.id,
      title,
      description,
      created_at: doc.data().created_at.toDate().toUTCString(),
      image,
      tags,
      post
    };
  });

  return {
    props: {
      courses,
    },
  };
}
