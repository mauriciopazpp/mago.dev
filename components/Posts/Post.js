function Post({ course }) {
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="https://picsum.photos/200/300" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{course.title}</h5>
                        <p className="card-text">{course.description}</p>
                        <p className="card-text">
                            <small className="text-muted">{course.created_at}</small>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
