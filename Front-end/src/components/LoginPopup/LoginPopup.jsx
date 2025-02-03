import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import image from "../../assets/interneSVG.svg"

// Define separate validation schemas for sign up and login
const signUpSchema = Yup.object({
  name: Yup.string().required('First Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  const { URL, setToken } = useContext(StoreContext);

  const handleClose = () => {
    setShowLogin(false);
  };

  const handleSubmit = async (values) => {
    let newURL = URL;
    if (currentState === "Login") {
      newURL += "/api/user/login";
    } else {
      newURL += "/api/user/register";
    }

    try {
      const response = await axios.post(newURL, values);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        handleClose();  // Hide popup on successful login/register
        setCurrentState("Sign up");  // Reset state or handle as needed
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Determine the validation schema based on the current state
  const validationSchema = currentState === "Sign up" ? signUpSchema : loginSchema;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 overflow-y-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Container */}
      <motion.div
        className="w-full max-w-3xl bg-white p-5 rounded-lg relative flex flex-col lg:flex-row"
        initial={{ y: -50, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-red-500 size-7 text-xl flex items-center justify-center rounded-full text-white"
        >
          x
        </button>
        {/* Side Image */}
        <motion.div
          className="hidden lg:block w-full lg:w-5/12 bg-gray-400 bg-cover rounded-l-lg"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        {/* Content */}
        <div className="w-full lg:w-7/12">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <>
                <motion.h3
                  className="py-4 text-2xl text-center text-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentState === "Sign up"
                    ? "Create an Account!"
                    : "Login to Your Account"}
                </motion.h3>
                <Form className="px-8 pt-6 pb-8 mb-4 rounded">
                  {currentState === "Sign up" && (
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="name"
                      >
                        First Name
                      </label>
                      <Field
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="First Name"
                        name="name"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
                    </motion.div>
                  )}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Field
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                  </motion.div>
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Field
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                      name="password"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                  </motion.div>
                  <motion.div
                    className="mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {currentState === "Sign up" ? "Register Account" : "Login"}
                    </button>
                  </motion.div>
                  <motion.hr
                    className="mb-6 border-t"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  />
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                      onClick={() => setCurrentState(currentState === "Sign up" ? "Login" : "Sign up")}
                    >
                      {currentState === "Sign up"
                        ? "Already have an account? Login!"
                        : "Don't have an account? Sign Up!"}
                    </a>
                  </motion.div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPopup;
