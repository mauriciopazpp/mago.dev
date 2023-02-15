/* eslint-disable react/button-has-type */
import Layout from '@/components/Layout';
import RecentCurses from '@/components/RecentCurses/RecentCurses';
import { getStaticProps } from '@/components/RecentCurses/RecentCurses';

export { getStaticProps };

export default function Dashboard({ courses }) {
  return (
    <Layout>
      <RecentCurses courses={courses} />
    </Layout>
  );
}
