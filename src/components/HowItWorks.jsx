import DesignIcon from "/Icons/landing page icons/Design Icon.svg";
import plagiarismIcon from "/Icons/landing page icons/Plagiarism Icon.svg";
import secureIcon from "/Icons/landing page icons/Secure Icon.svg";

const HowItWorks = () => {
  return (
    <div className="bg-background-blue p-4 text-center h-[700px] flex flex-col text-white ">
      <p className="h-1/4 text-3xl font-bold mt-40">How It Works</p>
      <section className="flex justify-around items-center ">
        <div className="flex flex-col items-center gap-3  ">
          <img
            src={DesignIcon}
            alt=""
            className="mb-5 bg-lavendar p-2 rounded-md"
          />
          <h1>Design Your Test</h1>
          <p>
            Choose Question types, timing and security <br /> settings in one
            screen.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img
            src={plagiarismIcon}
            alt=""
            className="mb-5  bg-lavendar p-2 rounded-md"
          />
          <h1>Share and Proctor</h1>
          <p>
            Send a secure link, monitor in real time <br /> and get instant
            result all at once
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img
            src={secureIcon}
            alt=""
            className="mb-5 bg-lavendar p-2 rounded-md"
          />
          <h1>Review Result</h1>
          <p>
            View scores, AI feedback, and integrity <br />
            report instantly
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
