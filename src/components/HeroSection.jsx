const HeroSection = () => {
  return (
    <div className="bg-lavendar relative pb-5">
      <div className="flex  p-4 mx-14 h-[600px]">
        <section className="w-1/2 flex flex-col justify-center content-center gap-6">
          <h1 className="text-purple text-4xl font-bold">
            Secure AI-Powered <br /> Online Assessment
          </h1>
          <p>
            Create, proctor and grade tests in minutes with built-in <br />{" "}
            plagiarism check and a distraction-free environment
          </p>
          <button className="bg-background-blue text-white w-[150px] h-[48px] rounded-lg text-[16px] hover: cursor-pointer">
            Get Started Free
          </button>
          <div className="flex content-center gap-2">
            <section className="flex relative">
              <img
                src="/images/Heroface4.jpg"
                alt=""
                className="w-12 h-12 rounded-[50%] border-solid border-white border-[1px]"
              />
              <img
                src="/images/Heroface3.jpg"
                alt=""
                className="w-12 h-12 rounded-[50%] border-solid border-white border-[1px] absolute left-[35px]"
              />
              <img
                src="/images/Heroface2.jpg"
                alt=""
                className="w-12 h-12 rounded-[50%] border-solid border-white border-[1px] absolute left-[75px]"
              />
              <img
                src="/images/Heroface1.jpg"
                alt=""
                className="w-12 h-12 rounded-[50%] border-solid border-white border-[1px] absolute left-[110px]"
              />
            </section>
            <p className="ml-[120px] mt-[15px]">
              Trusted by over <b>5000</b> users
            </p>
          </div>
        </section>
        <section className="w-1/2 max-h-full flex justify-end items-center relative">
          <img
            src="/images/LaptopHero1.png"
            alt=""
            className="rounded-[50%] h-[23%] w-[20%] absolute left-44 top-20 shadow-[1px_0px_30px_3px_white]"
          />
          <img
            src="/images/LaptopHero2.png"
            alt=""
            className="rounded-[50%] h-[70%] w-[65%]"
          />
        </section>
      </div>
      <img
        src="images/DownCurve.svg"
        className="absolute w-full  rotate-180 bottom-[-15px] h-[100px]"
        alt=""
      />
    </div>
  );
};

export default HeroSection;
