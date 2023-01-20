import { Formik, Form, Field } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import AuthFooter from "./AuthFooter";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

interface ToggleObject {
  state: boolean;
  text: string;
  inputType: string;
  placeholderStyle: string;
}

const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .email()
    .required("Please enter a valid email or phone number."),
  password: Yup.string()
    .required("Your password must contain between 4 and 60 characters.")
    .min(4)
    .max(60),
});

const AuthHero = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordToggle, setPasswordToggle] = useState<ToggleObject>({
    state: false,
    text: "SHOW",
    inputType: "password",
    placeholderStyle: "",
  });
  const requestToken = cookies.get("netflix-clone");
  useEffect(() => {
    // const fetchData = async () => {
    //   await axios
    //     .get(
    //       "https://api.themoviedb.org/3/authentication/token/new?api_key=5c94d2625ace9a31de63fcf23196007d"
    //     )
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // };
    // if (!requestToken) {
    //   fetchData();
    // }
    // console.log(requestToken);
  }, []);

  const initialValues = {
    username: "",
    password: "",
  };

  const TogglePassword = () => {
    setPasswordToggle(
      passwordToggle.state
        ? {
            state: false,
            text: "SHOW",
            inputType: "password",
            placeholderStyle: "",
          }
        : {
            state: true,
            text: "HIDE",
            inputType: "text",
            placeholderStyle: "authcard__card--floating-force",
          }
    );
  };

  const onSubmit = async (values: any) => {
    // console.log(values);
    // const data = { request_token: requestToken.replace(/["]/g, "") };
    // console.log(data);
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        // console.log(res);
        cookies.set("netflix-clone", res.data.request_token);
        router.push("/home");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="authhero">
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-2 pb-0 pb-md-2 authhero__nav">
        <Link className="navbar-brand" href="/">
          <div className="container-fluid">
            <div
              className="position-relative authhero__nav--logo mt-lg-2"
              // style={{ width: "11rem", minHeight: "47px" }}
            >
              <Image
                src="/netflix-logo.png"
                alt="Netflix"
                // layout="responsive"
                className="d-none d-sm-block img-fluid"
                width={160}
                height={40}
                style={{ width: "auto", height: "auto", objectFit: "cover" }}
              />
              <Image
                src="/netflix-logo.png"
                alt="Netflix"
                width={85}
                height={21}
                className="d-sm-none"
                //   style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </Link>
      </nav>

      <div className="container text-center">
        <div className="authcard">
          <div className="authcard__card p-3 p-md-5 py-0 py-md-5 text-start">
            <h5 className="mb-3 mb-lg-4">Sign In</h5>
            <Formik
              initialValues={initialValues}
              validationSchema={ValidationSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched, values }: any) => (
                <Form>
                  <label className="authcard__card--input-placeholder w-100">
                    <Field
                      id="username"
                      name="username"
                      type="text"
                      className={`w-100 border-0 my-2 my-lg-2 authcard__card--input  ${
                        errors.username &&
                        touched.username &&
                        "authcard__card--error-border"
                      }
                      `}
                    />
                    <label
                      className={`authcard__card--floating-label ${
                        values.username.length !== 0 &&
                        true &&
                        "authcard__card--floating-label-forced"
                      }`}
                    >
                      Email or phone number
                    </label>
                  </label>
                  {errors.username && touched.username ? (
                    <div className="authcard__card--errors">
                      {errors.username}
                    </div>
                  ) : null}
                  <label className="authcard__card--input-placeholder w-100">
                    <Field
                      id="password"
                      name="password"
                      // ref={ref}
                      type={passwordToggle.inputType}
                      className={`w-100 border-0 my-2 my-lg-2  authcard__card--input ${
                        passwordToggle.placeholderStyle
                      } ${
                        errors.password &&
                        touched.password &&
                        "authcard__card--error-border"
                      }`}
                    />
                    <label
                      className={`authcard__card--floating-label ${
                        values.password.length !== 0 &&
                        true &&
                        "authcard__card--floating-label-forced"
                      }`}
                      role="button"
                    >
                      Password
                    </label>
                    <span
                      className="authcard__card--password-toggle"
                      role="button"
                      onClick={TogglePassword}
                    >
                      {passwordToggle.text}
                    </span>
                  </label>
                  {errors.password && touched.password ? (
                    <span className="authcard__card--errors">
                      {errors.password}
                    </span>
                  ) : null}

                  {loading ? (
                    <button
                      type="submit"
                      className="w-100 py-3 fw-bold mt-4 mb-2  authcard__card--btn-loading"
                    >
<i className="fa fa-spinner fa-spin"></i>                 </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-100 py-3 fw-bold mt-4 mb-2  authcard__card--btn"
                    >
                      Sign In
                    </button>
                  )}
                  <div className="authcard__card--remember d-flex justify-content-between">
                    <div className="d-flex">
                      <input
                        className="form-check-input me-1 shadow-none"
                        type="checkbox"
                        value=""
                        id="firstCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="firstCheckbox"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link href="#" className="authcard__card--need-help">
                      Need help?
                    </Link>
                  </div>
                  <div className="authcard__card--signup my-4 my-lg-5">
                    <p className="authcard__card--signup-text">
                      New to Netflix?{" "}
                      <Link href="#" className="authcard__card--signup-link">
                        Sign up now.
                      </Link>
                    </p>
                    <p>
                      {" "}
                      This page is protected by Google reCAPTCHA to ensure you
                      are not a bot.{" "}
                      <Link href="#" className="">
                        Learn more.
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
};

export default AuthHero;
