import aiIcon from "/Icons/landing page icons/Ai Icon.svg";
import plagiarismIcon from "/Icons/landing page icons/Plagiarism Icon.svg";
import secureIcon from "/Icons/landing page icons/Secure Icon.svg";

const SecondHero = () => {
  return (
    <div className="bg-white p-4 text-center h-[500px] flex flex-col rounded-[50%] relative">
      <p className="h-1/4 text-3xl font-bold mt-14">Why Choose us?</p>
      <section className="flex justify-around items-center ">
        <div className="flex flex-col items-center gap-3">
          <img src={aiIcon} alt="" className="mb-5" />
          <h1>AI Instant Grading</h1>
          <p>
            Auto score objective and short answers <br /> questions for
            immediate feedback
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img src={plagiarismIcon} alt="" className="mb-5" />
          <h1>Plagiarism Detection</h1>
          <p>
            Built in similarity checks, flag copied <br /> content before you
            grade.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img src={secureIcon} alt="" className="mb-5" />
          <h1>Secure Test Mode</h1>
          <p>
            Full Screen enforcement, copy/paste <br /> disable, and tab switch
            alerts.
          </p>
        </div>
        <img
          src="/images/DownCurve.svg"
          className="absolute w-full top-[485px] h-[100px]"
          alt=""
        />
      </section>
    </div>
  );
};

export default SecondHero;
