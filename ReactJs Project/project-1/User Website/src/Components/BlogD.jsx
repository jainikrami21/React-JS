import React from "react";

function BlogD() {
  return (
    <div>
      {/* Blog Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            {/* Sidebar Start */}
            <div className="col-lg-4">
              {/* Search Form Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Keyword"
                  />
                  <button className="btn btn-primary px-4">
                    <i className="bi bi-search" />
                  </button>
                </div>
              </div>
              {/* Search Form End */}
              {/* Category Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Categories</h3>
                </div>
                <div className="link-animated d-flex flex-column justify-content-start">
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="#"
                  >
                    <i className="bi bi-arrow-right me-2" />
                    Web Design
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="#"
                  >
                    <i className="bi bi-arrow-right me-2" />
                    Web Development
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="#"
                  >
                    <i className="bi bi-arrow-right me-2" />
                    Web Development
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="#"
                  >
                    <i className="bi bi-arrow-right me-2" />
                    Keyword Research
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="#"
                  >
                    <i className="bi bi-arrow-right me-2" />
                    Email Marketing
                  </a>
                </div>
              </div>
              {/* Category End */}
              {/* Recent Post Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Recent Post</h3>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/blog-1.jpg"
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                    alt="blog-1"
                  />
                  <a
                    href
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Lorem ipsum dolor sit amet adipis elit
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/blog-2.jpg"
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                    alt="blog-2"
                  />
                  <a
                    href
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Lorem ipsum dolor sit amet adipis elit
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/blog-3.jpg"
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                    alt="blog-3"
                  />
                  <a
                    href
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Lorem ipsum dolor sit amet adipis elit
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/blog-1.jpg"
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                    alt="blog-1"
                  />
                  <a
                    href
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Lorem ipsum dolor sit amet adipis elit
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/blog-2.jpg"
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                    alt="blog-2"
                  />
                  <a
                    href
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Lorem ipsum dolor sit amet adipis elit
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src="img/blog-3.jpg"
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                    alt="blog-3"
                  />
                  <a
                    href
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Lorem ipsum dolor sit amet adipis elit
                  </a>
                </div>
              </div>
              {/* Recent Post End */}
              {/* Image Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <img src="img/blog-1.jpg" alt className="img-fluid rounded" />
              </div>
              {/* Image End */}
              {/* Tags Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Tag Cloud</h3>
                </div>
                <div className="d-flex flex-wrap m-n1">
                  <a href className="btn btn-light m-1">
                    Design
                  </a>
                  <a href className="btn btn-light m-1">
                    Development
                  </a>
                  <a href className="btn btn-light m-1">
                    Marketing
                  </a>
                  <a href className="btn btn-light m-1">
                    SEO
                  </a>
                  <a href className="btn btn-light m-1">
                    Writing
                  </a>
                  <a href className="btn btn-light m-1">
                    Consulting
                  </a>
                  <a href className="btn btn-light m-1">
                    Design
                  </a>
                  <a href className="btn btn-light m-1">
                    Development
                  </a>
                  <a href className="btn btn-light m-1">
                    Marketing
                  </a>
                  <a href className="btn btn-light m-1">
                    SEO
                  </a>
                  <a href className="btn btn-light m-1">
                    Writing
                  </a>
                  <a href className="btn btn-light m-1">
                    Consulting
                  </a>
                </div>
              </div>
              {/* Tags End */}
              {/* Plain Text Start */}
              <div className="wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Plain Text</h3>
                </div>
                <div className="bg-light text-center" style={{ padding: 30 }}>
                  <p>
                    Vero sea et accusam justo dolor accusam lorem consetetur,
                    dolores sit amet sit dolor clita kasd justo, diam accusam no
                    sea ut tempor magna takimata, amet sit et diam dolor ipsum
                    amet diam
                  </p>
                  <a href className="btn btn-primary py-2 px-4">
                    Read More
                  </a>
                </div>
              </div>
              {/* Plain Text End */}
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
      {/* Blog End */}
    </div>
  );
}

export default BlogD;
