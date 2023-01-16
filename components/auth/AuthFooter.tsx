import Link from "next/link";
import React, { FC } from "react";

const AuthFooter: FC = () => {
  return (
    <footer className="authfooter">
      <div className="container">
        <div className="authfooter__header">
          <Link href="#" className="authfooter__header--text ">
            Questions? Contact us.
          </Link>
        </div>
        <div className="row my-2 my-lg-4">
          <div className="col-lg-3 col-md-6 col-12 my-1 my-md-2">
            <Link href="#" className="authfooter__header--text ">
              FAQ
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-1 my-md-2">
            <Link href="#" className="authfooter__header--text ">
              Help Center
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-1 my-md-2">
            <Link href="#" className="authfooter__header--text ">
              Help Center
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-1 my-md-2">
            <Link href="#">Privacy</Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-1 my-md-2">
            <Link href="#" className="authfooter__header--text">
              Cookie Preferences
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-1 my-md-2">
            <Link href="#" className="authfooter__header--text">
              Corporate Information
            </Link>{" "}
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-1 my-md-2">
            <Link href="#" className="authfooter__header--text ">
              Terms of Use
            </Link>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
