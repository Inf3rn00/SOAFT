import arrowRight from "/Icons/landing page icons/ArrowRight.svg"
import arrowLeft from "/Icons/landing page icons/ArrowLeft.svg"
const Testimonial = () => {
  return (
    <div>
      <h1 className=" bg-white text-3xl font-bold mt-14 text-center">
        Testimonials
      </h1>

      <section className="mt-[-40px]">
        <div className="flex justify-center items-center p-4  mt-10 relative mb-20">
          <div className="rounded-4xl h-[464px] mt-6 w-[854px] bg-lavendar opacity-90"></div>
          <div className="rounded-4xl h-[464px] absolute top-15 w-[954px] bg-yellow opacity-50"></div>
          <div className="rounded-4xl h-[464px] absolute top-22 w-[1054px] bg-light-blue opacity-70"></div>


          <div className="rounded-4xl h-[464px] absolute top-30 w-[1154px] bg-background-blue flex p-4">
            <section className="w-3/5 p-4 text-white">
            <div className="w-[50px] h-[50px] rounded-[50%] bg-white"></div>
            <p className="p-4 my-14 leading-10  text-xl">Since integrating Soaft into our curriculum planning, <br /> I’ve witnessed a remarkable transformation in both <br />teaching efficiency and student engagement.</p>
            <div>
                <p className="px-4 font-bold mb-2">DR Amaka Olatunji</p>
                <small className="px-4">Head of Curriculum and Instruction, Lagos</small>
            </div>
            </section>
            <section className="w-2/5 flex justify-center items-center">
            <img src="/images/Testimonialface.jpg" alt="" className="h-4/5 rounded-4xl" />
            </section>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center gap-4 my-10">
        <img src={arrowLeft} alt=""  className="bg-lavendar p-2 rounded-[50%] cursor-pointer   shadow-lg"/>
        <img src={arrowRight} alt="" className="bg-lavendar p-2 rounded-[50%] cursor-pointer   shadow-lg" />
      </div>
    </div>
  );
};

export default Testimonial;
