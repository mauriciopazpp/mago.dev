import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

function Post({ course, img }) {
  return (
    <div className="mago-card bg-dark card mb-3">
      <Link
        href={`school/${course.id}`}
        passHref
        className="text-decoration-none"
      >
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
      </Link>
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
  img: PropTypes.string.isRequired,
};

export default React.memo(Post);
