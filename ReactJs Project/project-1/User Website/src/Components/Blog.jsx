import React from "react";


function Blog() {
  return (
    <div>
      {/* Blog Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
            <h1 className="mb-0">
              Read The Latest Articles from Our Blog Post
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                  <img className="img-fluid" src="img/blog-1.jpg" alt="blog-1.jpg" />
                  <a
                    className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    href
                  >
                    Web Design
                  </a>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small className="me-3">
                      <i className="far fa-user text-primary me-2" />
                      John Doe
                    </small>
                    <small>
                      <i className="far fa-calendar-alt text-primary me-2" />
                      01 Jan, 2045
                    </small>
                  </div>
                  <h4 className="mb-3">How to build a website</h4>
                  <p>
                    Dolor et eos labore stet justo sed est sed sed sed dolor
                    stet amet
                  </p>
                  <a className="text-uppercase" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                  <img className="img-fluid" src="img/blog-2.jpg" alt="blog-2.jpg" />
                  <a
                    className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    href
                  >
                    Web Design
                  </a>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small className="me-3">
                      <i className="far fa-user text-primary me-2" />
                      John Doe
                    </small>
                    <small>
                      <i className="far fa-calendar-alt text-primary me-2" />
                      01 Jan, 2045
                    </small>
                  </div>
                  <h4 className="mb-3">How to build a website</h4>
                  <p>
                    Dolor et eos labore stet justo sed est sed sed sed dolor
                    stet amet
                  </p>
                  <a className="text-uppercase" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                  <img className="img-fluid" src="img/blog-3.jpg" alt="blog-3"/>
                  <a
                    className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    href
                  >
                    Web Design
                  </a>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small className="me-3">
                      <i className="far fa-user text-primary me-2" />
                      John Doe
                    </small>
                    <small>
                      <i className="far fa-calendar-alt text-primary me-2" />
                      01 Jan, 2045
                    </small>
                  </div>
                  <h4 className="mb-3">How to build a website</h4>
                  <p>
                    Dolor et eos labore stet justo sed est sed sed sed dolor
                    stet amet
                  </p>
                  <a className="text-uppercase" href>
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Start */}
    </div>
  );
}

export default Blog;