import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';
import Layout from '@/components/Layout';
import { getById, getAll } from '@/model/Courses';

function CourseDetails({ course }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  const memoizedCourse = useMemo(() => course, [course]);

  return (
    <Layout className="school">
      <div className="row">
        <div className="col-md-8">
          <h1 className="text-weight-600">{memoizedCourse.title}</h1>
          <br />
          <div dangerouslySetInnerHTML={{ __html: memoizedCourse.content }} />
        </div>
        <div className="col-md-4">content</div>
      </div>
    </Layout>
  );
}

function areEqual(prevProps, nextProps) {
  return prevProps.course.id === nextProps.course.id;
}

export default memo(CourseDetails, areEqual);

export async function getStaticPaths() {
  const courses = await getAll();

  const paths = courses.map(({ id }) => ({
    params: { id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const course = await getById(params.id);

  return { props: { course } };
}
