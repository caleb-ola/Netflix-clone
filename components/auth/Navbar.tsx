import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-2 hero__nav">
        <div className="container-fluid mx-5 my-2">
          <Link className="navbar-brand" href="/">
            <Image
              src="/netflix-logo.png"
              alt="Netflix"
              width={172}
              height={47}
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
