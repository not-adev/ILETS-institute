import React from "react";
function Resources() {
  return (
    <section className="py-16 bg-white" id="resources">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Resources</h2>
      {/* Official Sample Test */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-30 px-4">
        {/* Text Left */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">Official Sample Test</h3>
          <p className="text-gray-700 text-lg">
            Practice with authentic IELTS sample tests to familiarize yourself with the real exam format and question types. Improve your confidence and performance!
          </p>
          <button className="mt-6 flex items-center gap-2 bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contact Us <span className="text-xl">→</span>
          </button>
        </div>
        {/* Image Right with Rectangle Box */}
        <div className="md:w-1/2 w-full h-full flex justify-center relative">
          <div className="absolute right-0  top-[-10%] w-60 h-full bg-blue-100 rounded-xl z-0" style={{ height: "60vh" }}></div>
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
            alt="Official Sample Test"
            className="relative z-10 w-60 md:w-auto h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
      {/* Writing Test Preparation Resources */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl mx-auto px-4">
        {/* Text Right */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0 p-5">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">Writing Test Preparation Resources</h3>
          <p className="text-gray-700 text-lg">
            Access expert tips, sample essays, and scoring criteria to boost your writing skills. Get ready to achieve a higher band in the IELTS writing section!
          </p>
          <button className="mt-6 flex items-center gap-2 bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition justify-start ">
            Contact Us <span className="text-xl">→</span>
          </button>
        </div>
        {/* Image Left with Rectangle Box */}
        <div className="md:w-1/2 w-full flex justify-center relative">
         <div className="absolute left-0  top-[-10%] w-60 h-full bg-blue-100 rounded-xl z-0" style={{ height: "60vh" }}></div>
            <img
            src="https://i.pinimg.com/736x/a4/58/87/a458874e44a648ff94bd9ccc55a75abc.jpg"
            alt="Writing Test Preparation"
            className="relative z-10 w-[150px] md:w-auto h-[50vh] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Resources;