import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </Link>
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </Link>
          </section>
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>
          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white">
                      Link 1
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 2
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 3
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 4
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white">
                      Link 1
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 2
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 3
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 4
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white">
                      Link 1
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 2
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 3
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 4
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white">
                      Link 1
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 2
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 3
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">
                      Link 4
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
