import { Link } from "react-router-dom";

const TransferAssesment = () => {
  return (
    <div className="mt-15 bg-background-offwhite relative  pb-90 ">
      <img
        src="/images/greyCurve.svg"
        alt=""
        className="rotate-180 w-full absolute top-[-125px] "
      />

      <div className="mt-50 flex justify-center items-center h-full">
        <section className="w-1/2 p-8 flex flex-col gap-6 justify-center  mx-14">
          <h1 className=" text-3xl font-bold">
            Ready to Transform <br /> your Assessment
          </h1>
          <p>
            Sign up in second and experience secure, <br /> intelligent testing.
          </p>
          <div className="flex gap-4 w-full">
            <button className="bg-background-blue text-white p-2 w-1/3 rounded-lg cursor-pointer">
              <Link to="/login">Get Started Free</Link>
            </button>

            <button className="bg-background-offwhite outline-1 outline-background-blue text-background-blue p-2 w-1/3 rounded-lg cursor-pointer">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </section>
        <section className="w-1/2 flex justify-center items-center">
          <img src="/images/Student2Image.jpg" alt="" className="w-4/5" />
        </section>
      </div>
    </div>
  );
};

export default TransferAssesment;
