import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { getById, getAll } from '@/model/Courses';

export default function CourseDetails({ course }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <Layout className="school">
      <div className="row">
        <div className="col-md-8 text-justify">
          <h1 className="text-weight-600">{course.title}</h1>
          <br />
          <div dangerouslySetInnerHTML={{ __html: course.content }} />
        </div>
        <div className="col-md-8">batata</div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const courses = await getAll();

  const paths = courses.map((course) => ({
    params: { id: course.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const course = await getById(params.id);

  return {
    props: {
      course,
    },
  };
}
