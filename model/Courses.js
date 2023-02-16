import { db } from "@/lib/firebase";
import { doc, collection, getDocs, getDoc } from "firebase/firestore";
import 'firebase/firestore';

const getById = async (id) => {
    const docRef = doc(db, 'courses', id);
    const course = await getDoc(docRef);
    const courseData = course.data();
    
    if (course.exists()) {
      return {
        id: course.id,
        title: courseData.post.title,
        content: courseData.post.content,
      };
    } else {
      console.log('No such document!');
      return null;
    }
};

const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, 'courses'));
  return querySnapshot.docs.map((doc) => {
    const courseData = doc.data();
    const { title, description, image, tags, post } = courseData;
    return {
      id: doc.id,
      title,
      description,
      created_at: doc.data().created_at.toDate().toUTCString(),
      image,
      tags,
      post,
    };
  });
};

export { getById, getAll };
