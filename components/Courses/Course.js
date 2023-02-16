import PropTypes from 'prop-types';
import Image from 'next/image';

const img = 'https://picsum.photos/466/200?change=';

function Post({ course }) {
  return (
    <div className="mago-card card mb-3">
      <a className="text-decoration-none" href={`school/${course.id}`}>
        <div className="col">
          <div className="card">
            <Image
              src={img}
              alt={course.title}
              width={630}
              height={200}
              className="card-img-top"
            />
          </div>
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="mago-card-class text-warning" key={course.id}>
                Class
              </h5>
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
              <p className="card-text">
                <small className="text-muted">{course.created_at}</small>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

Post.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
