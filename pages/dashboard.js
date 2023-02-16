/* eslint-disable react/button-has-type */
import Layout from '@/components/Layout';
import RecentCurses from '@/components/Courses/Courses';
import { getStaticProps } from '@/components/Courses/Courses';

export { getStaticProps };

export default function Dashboard({ courses }) {
  return (
    <Layout className="dashboard">
      <div className="container-sm container-dashboard">
        <div className="mago-about alert bg-dark text-white-01">
          <h4>About this website</h4>
          <div className="row">
            <div className="col-sm">
              {`Hello there, I'm Mauricio Paz, the creator of this website
               that was built using pure Next.js in conjunction with Firebase. 
               The exciting news is that it's open-source, which means that you can access and examine the source code by clicking here.`}
              <p>
                <a href="https://github.com/mauriciopazpp/mago.dev">
                  https://github.com/mauriciopazpp/mago.dev
                </a>
              </p>
              Enjoy.
            </div>
          </div>
        </div>
        <div className="row">
          <RecentCurses courses={courses} />
        </div>
      </div>
    </Layout>
  );
}
