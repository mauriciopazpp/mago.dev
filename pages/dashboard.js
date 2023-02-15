/* eslint-disable react/button-has-type */
import Layout from '@/components/Layout';
import { allPosts } from '@/model/Posts'
import { useState } from 'react';

export default function Dashboard() {
  const [posts, setPosts] = useState(null);

  const getPosts = () => {
    allPosts()
      .then((response) => {
        setPosts(response)
      })
      .catch((error) => {
        console.error(error)
      });
  }

  return (
    <Layout>
        <button onClick={getPosts}>Get Posts</button>
        Layout
    </Layout>
  );
}
