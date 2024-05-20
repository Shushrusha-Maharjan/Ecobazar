import React, { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Formik, Form, Field } from 'formik';
import { IoEyeOffOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import * as Yup from 'yup';

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  // Define validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  return (
    <section>
      <div className="bg-[url('./assets/img/signin.jpg')] bg-cover h-[120px] top-[195px]">
        <div className='md:container md:mx-auto md:px-28 flex items-center pt-12'>
          <div className='text-white'><IoHomeOutline size={30}/></div>
          <div className='text-white '><IoIosArrowForward size={30}/></div>
          <div className='text-white'><a >Account</a></div>
          <div className='text-white'><IoIosArrowForward size={30}/></div>
          <div className='text-white '>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-white"
              }
            >
              <a >Login</a>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen ">
        <Formik
          initialValues={{ email: '', password: '', rememberMe: false }}
          validationSchema={validationSchema} // Pass validation schema here
          onSubmit={(values) => {
            // Handle form submission
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
              <div className='text-[32px] text-center font-medium'>Sign In</div>
              <div className="mb-4">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && touched.email ? 'border-red-500' : ''}`}
                />
                {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>
              <div className="mb-6">
                <div className="flex relative items-center justify-center">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password && touched.password ? 'border-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-2 py-2 focus:outline-none"
                  >
                    {showPassword ? (
                      <IoEyeOutline className='mt-[-15px] text-slate-500'/>
                    ) : (
                      <IoEyeOffOutline className='mt-[-15px] text-slate-500'/>
                    )}
                  </button>
                </div>
                {errors.password && touched.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
              </div>
              <div className="flex items-center justify-between">
                <div className="inline-block">
                  <label className="inline-flex items-center">
                    <Field
                      type="checkbox"
                      name="rememberMe"
                      className="text-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                </div>
                <a href="#" className="inline-block align-baseline font-bold text-sm ml-20">
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="bg-primary rounded-full duration-150 hover:bg-green-700 w-full text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login In
                </button>
              </div>
              <p className='text-sm'>
                Don't have an account?
                <a href="#" className="inline-block align-baseline font-bold text-sm ">
                  Register
                </a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default SignIn;
