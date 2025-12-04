const TestModal = ({ closeModal }) => {
  const testDetails = [
    {
      title: "Number of Questions",
      total: "25 Questions",
      icon: "/images/question.png",
    },
    {
      title: "Time Limit",
      total: "90 Minutes",
      icon: "/images/clock (2).png",
    },
    {
      title: "Attempts Allowed",
      total: "1 of 1",
      icon: "/images/attempt.png",
    },
    {
      title: "Passing Score",
      total: "70% (70/100)",
      icon: "/images/percent.png",
    },
  ];
  return (
    <>
      {/* Dark overlay that closes modal when clicked */}
      <div
        className="fixed inset-0 bg-black/80 bg-opacity-70 z-40"
        onClick={() => closeModal(false)}
      />

      {/* Modal - 80% of screen */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-2xl z-50 w-[80vw] h-[90vh] overflow-auto">
        <section className="flex items-center justify-between">
          <h1 className="text-[28px] font-semibold">
            Midterm Examination - Advanced Mathematics
          </h1>
          <span
            className="text-2xl cursor-pointer font-light "
            onClick={() => closeModal(false)}
          >
            x
          </span>
        </section>

        <section className="my-10 border-l-5 border-l-background-blue py-6 bg-[#F2F2FD] text-background-blue">
          <p className="px-4">
            Please read all questions carefully before beginning the test.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-6 mb-10">
          {testDetails.map((detail, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-6 bg-background-offwhite py-6 px-4 rounded-xl"
              >
                <div className="bg-purple-50 w-12 h-12 flex justify-center items-center rounded-full">
                  <img
                    src={detail.icon}
                    alt={detail.title}
                    className="w-10 h-10 p-2"
                  />
                </div>

                <div>
                  <p className="text-gray-500 mb-4 font-medium ">
                    {detail.title}
                  </p>
                  <p className=" font-semibold text-[20px] ">{detail.total}</p>
                </div>
              </div>
            );
          })}
        </section>

        <section>
          <h2 className="text-[22px] font-semibold my-6">Test Rules</h2>
          <ul className="list-disc ml-4 my-4 ">
            <li className="px-2 py-2 font-semibold">
              This is a closed book examination. No external resources are
              allowed
            </li>
            <li className="px-2 py-2 font-semibold">
              You must complete the test within the allotted time. The timer
              will start once you begin.
            </li>
            <li className="px-2 py-2 font-semibold">
              Question may include multiple choice, short answers and
              calculation problems.
            </li>
            <li className="px-2 py-2 font-semibold">
              You may use the provided calculator for calculations only.
            </li>
            <li className="px-2 py-2 font-semibold">
              Once you submit your test , you cannot return to makes changes.
            </li>
          </ul>
        </section>

        <section className="bg-[#FDF2F3] text-red-600 border-l-7 border-b-5 border-left-red-600 mb-10 ">
          <h2 className="text-[22px] font-semibold my-6 px-6 pt-10">
            Important Security Notice:{" "}
          </h2>
          <ul className="list-disc ml-12 mb-5">
            <li className="py-1">
              Leaving the test window or switching tabs / application is not
              allowed and will be logged
            </li>
            <li className="py-1">
              Screen monitoring may be enabled during this test.
            </li>
            <li className="py-1">
              Your IP address and location will be recorded for security
              purposes.
            </li>
            <li className="py-1">
              Academic dishonesty will result in a failing grade and may lead to
              disciplinary action.
            </li>
          </ul>
        </section>

        <section>
          <form action="" className="mb-10">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="mr-2"
            />
            <label htmlFor="checkbox" className="font-semibold mb-10">
              I have read and understood the test rules and security notice. I
              agree to abide by them during the examination.
            </label>
          </form>
          <div className="flex justify-between items-center">
            <button
              className="bg-white border-1 text-black px-6 py-3 rounded-lg cursor-pointer font-semibold hover:bg-gray-100"
              onClick={() => closeModal(false)}
            >
              Close Modal
            </button>
            <button
              className="bg-background-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 cursor-pointer"
              onClick={() => {
                alert("Test Started");
                closeModal(false);
              }}
            >
              Begin Test
            </button>
          </div>
        </section>

        {/* */}
      </div>
    </>
  );
};

export default TestModal;
