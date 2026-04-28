import profile from "../../Assets/profile.png";
import resume from "../../Assets/cv-nishil.pdf";

const AboutMe = () => {
  return (
    <>
      <div
        className="xl:px-50 lg:px-40 py-20 px-5 sm:h-screen h-full w-full"
        id="about"
      >
        <h1 className="text-white sm:text-4xl text-3xl font-bold text-center sm:pb-15 pb-8">
          About Me
        </h1>
        {/* for laptop and tablet  */}
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div className="w-2/5">
            <div className="">
              <img
                className="w-90 h-100 object-cover rounded-2xl"
                src={profile}
                alt=""
              />
            </div>
          </div>
          <div className="w-3/5">
            <div className=" flex flex-col gap-4">
              <h2 className="text-white text-2xl font-bold"> I'm Nishil</h2>
              <p className="text-white font-bold text-xl">
                Full Stack Developer
              </p>
              <p className="text-white font-semibold text-xl text-justify indent-10">
                I'm Nishil Chavda, a passionate web developer focused on
                building dynamic and scalable applications. I specialize in
                JavaScript, React, and Node.js. I hold a Bachelor's degree in
                Computer Applications from Sutex Bank College of Computer
                Applications and Science, affiliated with Veer Narmad South
                Gujarat University.
              </p>
              <div className="flex flex-row gap-1 text-xl">
                <p className="font-bold text-green-600">Email : </p>
                <p className="text-white"> nishilchavda@gmail.com</p>
              </div>
              <div className="flex flex-row gap-1 text-xl">
                <p className="font-bold text-green-600">Place :</p>{" "}
                <p className="text-white"> Surat, Gujarat - 394107</p>
              </div>
            </div>
            <a href={resume} download="cv-nishil.pdf">
              <button className="bg-radial from-green-800  from-1% to-green-900*2 sm:border-3 border-2 border-green-700 px-6 py-2 text-white rounded-full text-2xl font-bold sm:mt-10 mt-8 active:scale-95 transition-all duration-300">
                Resume
              </button>
            </a>
          </div>
        </div>

        {/* for mobile  */}
        <div className="md:hidden flex flex-col items-center justify-between">
          <div>
            <img
              className="w-70 h-70 object-cover rounded-2xl pb-2"
              src={profile}
              alt=""
            />
          </div>
          <div>
            <div className=" flex flex-col gap-2">
              <h2 className="text-white text-xl font-bold text-center">
                {" "}
                I'm Nishil
              </h2>
              <p className="text-white font-bold text-xl text-center">
                Full Stack Developer
              </p>
              <p className="text-white text-[15px] font-semibold text-justify indent-10">
                I'm Nishil Chavda, a passionate web developer focused on
                building dynamic and scalable applications. I specialize in
                JavaScript, React, and Node.js. I hold a Bachelor's degree in
                Computer Applications from Sutex Bank College of Computer
                Applications and Science, affiliated with Veer Narmad South
                Gujarat University.
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row gap-1 text-lg">
                  <p className="font-bold text-green-600">Email : </p>
                  <p className="text-white"> nishilchavda@gmail.com</p>
                </div>
                <div className="flex flex-row gap-1 text-lg">
                  <p className="font-bold text-green-600">Place :</p>{" "}
                  <p className="text-white"> Surat, Gujarat - 394107</p>
                </div>

                <a href={resume} download="cv-nishil.pdf">
                  <button className="bg-radial from-green-800  from-1% to-green-900*2 sm:border-3 border-2 border-green-700 px-3 py-1 text-white rounded-full text-xl font-bold mt-4">
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
