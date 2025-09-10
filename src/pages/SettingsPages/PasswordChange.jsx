import { useFormik } from "formik";
import { useState } from "react";
import { passwordSchema } from "../../schema/validation";

const PasswordChange = () => {
  const onSubmit = () => {
    alert("Password Updated");
    formik.resetForm({
      values: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    });
  };

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handlClick = () => {
    setShow(!show);
  };
  const handlClick2 = () => {
    setShow2(!show2);
  };
  const handlClick3 = () => {
    setShow3(!show3);
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "12345678",
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema: passwordSchema,
    onSubmit,
  });

  console.log(formik.errors);

  return (
    <div className="p-5 ">
      <form className="h-auto" onSubmit={formik.handleSubmit}>
        <section className="rounded-lg shadow-md p-5 bg-white mb-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold mt-2">Password</h1>
            <button
              className="flex items-center mt-2 bg-[#5046e5] text-white font-bold px-4 py-2 rounded-lg gap-2 cursor-pointer"
              type="submit"
            >
              Update Password
            </button>
          </div>

          <hr className="text-gray-500 my-10 w-full " />
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="currentPassword">Current Password</label>
              <div className="relative">
                <input
                  type={show3 ? "password" : "text"}
                  className={` ${
                    formik.errors.currentPassword &&
                    formik.touched.currentPassword
                      ? "border-red-600 border-solid border-1 p-2 w-80"
                      : "border-1 border-solid border-gray-400 p-2 w-80"
                  }`}
                  name="currentPassword"
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                />
                {formik.values.currentPassword && (
                  <small onClick={handlClick3}>
                    {show3 ? (
                      <img
                        src="/images/showPassword.svg"
                        className="  hover: cursor-pointer absolute top-2 left-70"
                        alt=""
                      />
                    ) : (
                      <img
                        src="/images/hidePassword.svg"
                        className=" hover: cursor-pointer absolute top-2 left-70"
                        alt=""
                      />
                    )}
                  </small>
                )}

                {formik.errors.currentPassword &&
                  formik.touched.currentPassword && (
                    <small className="text-red-600 text-sm mt-1">
                      {formik.errors.currentPassword}
                    </small>
                  )}
              </div>
            </div>

            <div className="flex flex-col gap-2 relative">
              <label htmlFor="newPassword">New Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  className={` ${
                    formik.errors.newPassword && formik.touched.newPassword
                      ? "border-red-600 border-solid border-1 p-2 w-80"
                      : "border-1 border-solid border-gray-400 p-2 w-80"
                  }`}
                  name="newPassword"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                />
                {formik.values.newPassword && (
                  <small
                    onClick={handlClick}
                    className=" hover: cursor-pointer"
                  >
                    {show ? (
                      <img
                        src="/images/hidePassword.svg"
                        className="w-6 h-6 absolute top-2 left-70"
                      />
                    ) : (
                      <img
                        src="/images/showPassword.svg"
                        className="w-6 h-6 absolute top-2 left-70 "
                      />
                    )}
                  </small>
                )}
              </div>

              {formik.errors.newPassword && formik.touched.newPassword && (
                <small className="text-red-600 text-sm mt-1">
                  {formik.errors.newPassword}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative">
                <input
                  type={show2 ? "text" : "password"}
                  className={` ${
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? "border-red-600 border-solid border-1 p-2 w-80"
                      : "border-1 border-solid border-gray-400 p-2 w-80"
                  }`}
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                {formik.values.confirmPassword && (
                  <small
                    onClick={handlClick2}
                    className=" hover: cursor-pointer"
                  >
                    {show2 ? (
                      <img
                        src="/images/hidePassword.svg"
                        className="w-6 h-6 absolute top-2 left-70"
                      />
                    ) : (
                      <img
                        src="/images/showPassword.svg"
                        className="w-6 h-6 absolute top-2 left-70 "
                      />
                    )}
                  </small>
                )}
              </div>

              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <small className="text-red-600 text-sm mt-1">
                    {formik.errors.confirmPassword}
                  </small>
                )}
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default PasswordChange;
