import React from "react";
import { Formik, Form, input } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string(),
    // .min(2, "Too Short!")
    // .max(50, "Too Long!")
    // .required("Enter Name!"),

  email: Yup.string().email("Invalid email").required("Enter Email!"),
  contact: Yup.string(),
    // .min(10, "Too Short!")
    // .max(12, "Too Long!")
    // .required("Enter Contact!"),
  city: Yup.string(),
    // .min(2, "Too Short!")
    // .max(50, "Too Long!")
    // .required("Enter City"),
  password: Yup.string(),
    // .min(5, "Too Short!")
    // .max(50, "Too Long!")

    // .required("Enter Password"),
});

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8  col-sm-9  col-auto  mt-2">
            <Formik
              initialValues={{
                firstName: "",
                email: "",
                contact: '',
                city: "",
                password: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                axios
                  .post("http://localhost:8000/signup/signup",{values})
                  .then(function (response) {
                    // handle success
                    console.log(response);
                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                  });

                console.log(values);
              }}
            >
              {({
                errors,
                touched,
                values,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <label className="mt-3 fw-bold">Name</label> <br />
                  <input
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // className="w-100 py-1 px-2 shadow rounded-3 border border-dark"
                    placeholder="Name"
                    className={`form-control ${
                      errors.firstName
                        ? "is-invalid"
                        : "w-100 py-1 px-2 shadow rounded-3 border border-dark "
                    }`}
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="text-danger ">{errors.firstName}</div>
                  )}{" "}
                  <label className="mt-3 fw-bold">Email</label> <br />
                  <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className="w-100 px-2 py-1 shadow rounded-3 border border-dark"
                    placeholder="Email"
                    className={`form-control ${
                      errors.email
                        ? "is-invalid"
                        : "w-100 py-1 px-2 shadow rounded-3 border border-dark "
                    }`}
                  />
                  {errors.email && touched.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                  <div className="d-flex">
                    <div className="me-2">
                      <label className="mt-3 fw-bold">Contact</label> <br />
                      <input
                        name="contact"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // className="w-100 py-1 px-2 shadow  rounded-3 border border-dark"
                        placeholder="Contact"
                        className={`form-control ${
                          errors.contact
                            ? "is-invalid"
                            : "w-100 py-1 px-2 shadow rounded-3 border border-dark "
                        }`}
                      />
                      {errors.contact && touched.contact && (
                        <div className="text-danger">{errors.contact}</div>
                      )}
                    </div>
                    <div className="ms-auto">
                      <label className="mt-3  fw-bold">city</label> <br />
                      <input
                        name="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // className="w-100 py-1 px-2 shadow rounded-3 border border-dark"
                        placeholder="city"
                        className={`form-control ${
                          errors.city
                            ? "is-invalid"
                            : "w-100 py-1 px-2 shadow rounded-3 border border-dark "
                        }`}
                      />
                      {errors.city && touched.city && (
                        <div className="text-danger">{errors.city}</div>
                      )}
                    </div>
                  </div>
                  <label className="mt-3 fw-bold">Password</label> <br />
                  <input
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // className="w-100 py-1 px-2 shadow rounded-3 border border-dark "
                    placeholder="Password"
                    className={`form-control ${
                      errors.password
                        ? "is-invalid"
                        : "w-100 py-1 px-2 shadow rounded-3 border border-dark "
                    }`}
                  />
                  {errors.password && touched.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                  <br />
                  <br />
                  <div>
                    <button
                      type="submit"
                      className="btn btn-warning fw-bold px-4"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
