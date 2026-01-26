import rubricsIcon from "/Icons/landing page icons/Rubrics Icon.svg";
import analyticsIcon from "/Icons/landing page icons/Analytics Icon.svg";
import accessIcon from "/Icons/landing page icons/Access Icon.svg";
import eductechIcon from "/Icons/landing page icons/Edutech Icon.svg";

const EducatorTrust = () => {
  return (
    <div className="bg-background-offwhite flex p-4 relative">
      <img
        src="/images/greyCurve.svg"
        className="absolute w-full  rotate-180 top-[-90px] h-[100px] left-0 fill-background-offwhite"
        alt=""
      />

      <section className="w-2/5">
        <h1 className=" text-3xl font-bold mt-20 mb-10 text-center">
          Why Educators Trust SOAFT
        </h1>
        <div className="flex justify-center items-center p-4">
          <div className="w-[380px] h-[500px] overflow-hidden [clip-path:polygon(0%_100%,_100%_100%,_100%_15%,0%_0%)] rounded-2xl">
            <img
              src="/images/StudentsImage.jpg"
              alt="Students"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-3/5 grid grid-cols-2 gap-10 place-content-center mt-40">
        <div className=" flex gap-4">
          <div className="">
            <img src={rubricsIcon} alt="" />
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Custom Rubrics</h1>
            <p>
              Define Criteria and let <br /> AI suggest scores.
            </p>
          </div>
        </div>

        <div className=" flex gap-4">
          <div className="">
            <img src={analyticsIcon} alt="" />
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Analytics Dashboard</h1>
            <p>
              Track class performance <br /> and question difficulty
            </p>
          </div>
        </div>
        <div className=" flex gap-4">
          <div className="">
            <img src={accessIcon} alt="" />
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className="font-semibold text-xl">
              Anytime & Anywhere <br />
              Access
            </h1>
            <p>
              Access your assessment and <br /> review result from any desktop
            </p>
          </div>
        </div>
        <div className=" flex gap-4 ">
          <div className="">
            <img src={eductechIcon} alt="" />
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Edu-Tech Integration</h1>
            <p>
              <i className="font-semibold">SOAFT</i> gives you a unified <br />{" "}
              workflow and data flow across <br /> entire stack.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducatorTrust;
