import nairaIcon from "/Icons/landing page icons/naira.svg";
import nairaIcon2 from "/Icons/landing page icons/nairaBlack.svg";
const TransparentPricing = () => {
  return (
    <div className="bg-background-offwhite p-4">
      <section className="text-center flex flex-col items-center p-4 gap-4 mb-2">
        <h1 className="text-3xl font-bold mt-14">
          Transparent Pricing for all
        </h1>
        <p>Start free, upgrade for advanced security and unlimited tests.</p>
      </section>
      <section className="flex justify-around items-center p-4 gap-4">
        <div className="bg-background-offwhite rounded-2xl w-[380px] shadow-lg">
          <div className="bg-white rounded-2xl p-4 flex flex-col gap-6">
            <p className="font-bold text-lg ">Basic</p>
            <p>
              Get started with up to 3 tests per month, essential grading tools.
            </p>
            <h1 className="text-2xl font-bold">Free Plan</h1>
            <button className="bg-background-blue text-white p-2 rounded-xl cursor-pointer outline-black outline-1 mb-2">
              Get Started
            </button>
          </div>
          <div>
            <p className="p-4 font-bold text-lg">Features</p>
            <ul className="list-disc marker:text-background-blue px-8 mb-6">
              <li>Access to Assessment Creation Tools</li>
              <li>AI Grading For Objective Question</li>
              <li>Fullscreen Test Mode</li>
              <li>Basic Performance Dashboard</li>
              <li>Email Support</li>
              <li>Limited Test Scheduling Options</li>
            </ul>
          </div>
        </div>

        <div className="bg-background-offwhite rounded-2xl w-[380px] shadow-lg ">
          <div className="bg-background-blue rounded-2xl p-4 flex flex-col gap-6 text-white">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg ">Basic</p>
              <div className="text-black p-2 font-bold bg-white rounded-4xl">
                Most Popular
              </div>
            </div>
            <p>
              Unlock unlimited assessments, AI powered grading, plagiarism check
              etc.
            </p>
            <h1 className="text-2xl font-bold flex items-center gap-1">
              <img src={nairaIcon} alt="" className="h-[20px]" /> 20,000{" "}
              <small className="font-light text-sm">/Month</small>
            </h1>
            <button className="bg-white text-background-blue p-2 rounded-xl cursor-pointer outline-black outline-1 mb-2">
              Get Started
            </button>
          </div>
          <div>
            <p className="p-4 font-bold text-lg">Features</p>
            <ul className="list-disc marker:text-light-blue px-8 mb-6">
              <li>Access to all Basic Features</li>
              <li>Plagiarism Detection</li>
              <li>Customizable Test Settings</li>
              <li>Priority Support</li>
              <li>Download Performance Reports</li>
              <li>Group Performance Insight</li>
            </ul>
          </div>
        </div>

        <div className="bg-background-offwhite rounded-2xl w-[380px] shadow-lg">
          <div className="bg-white rounded-2xl p-4 flex flex-col gap-6">
            <p className="font-bold text-lg ">Advanced</p>
            <p>
              Get started with up to 3 test per month, essential grading tools.
            </p>
            <h1 className="text-2xl font-bold flex items-center gap-1">
              <img src={nairaIcon2} alt="" className="h-[20px]" /> 20,000{" "}
              <small className="font-light text-sm">/Month</small>
            </h1>
            <button className="bg-background-blue text-white p-2 rounded-xl cursor-pointer outline-black outline-1 mb-2">
              Get Started
            </button>
          </div>
          <div>
            <p className="p-4 font-bold text-lg">Features</p>
            <ul className="list-disc marker:text-background-blue px-8 mb-6">
              <li>Access to Assessment Creation Tools</li>
              <li>AI Grading For Objective Question</li>
              <li>Fullscreen Test Mode</li>
              <li>Basic Performance Dashboard</li>
              <li>Email Support</li>
              <li>Limited Test Scheduling Options</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransparentPricing;
