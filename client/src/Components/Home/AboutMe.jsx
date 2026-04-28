import profile from "../../Assets/profile.png";
import resume from "../../Assets/cv-nishil.pdf";
import ScrollFloat from "../ui/ScrollFloat";
import TiltedCard from "../ui/TiltedCard";
import ShinyText from "../ui/ShinyText";

const AboutMe = () => {
  return (
    <>
      <div
        className="w-full xl:px-50 lg:px-40 md:px-20 px-6 pt-18 pb-10 sm:min-h-screen overflow-hidden"
        id="about"
      >
        <h1 className="text-white font-bold sm:text-4xl text-3xl text-center pb-8">
          <ScrollFloat>About Me</ScrollFloat>
        </h1>
        {/* for laptop and tablet  */}
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div className="w-2/5">
            <TiltedCard className="w-max mx-auto cursor-grab active:cursor-grabbing">
              <img
                className="w-90 h-100 object-cover rounded-2xl shadow-2xl border-4 border-slate-800"
                src={profile}
                alt=""
              />
            </TiltedCard>
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
              <button className="bg-radial from-green-800 from-1% to-green-900 sm:border-3 border-2 border-green-700 px-6 py-2 text-white rounded-full text-2xl font-bold sm:mt-10 mt-8 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <ShinyText text="Resume" disabled={false} speed={3} className="" color="#ffffff" shineColor="#86efac" />
              </button>
            </a>
          </div>
        </div>

        {/* for mobile  */}
        <div className="md:hidden flex flex-col items-center justify-between">
          <TiltedCard className="w-max mx-auto mb-6">
            <img
              className="w-70 h-70 object-cover rounded-2xl shadow-2xl border-3 border-slate-800"
              src={profile}
              alt=""
            />
          </TiltedCard>
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
                  <button className="bg-radial from-green-800 from-1% to-green-900 sm:border-3 border-2 border-green-700 px-6 py-1.5 text-white rounded-full text-xl font-bold mt-4 shadow-[0_0_15px_rgba(34,197,94,0.3)] active:scale-95 transition-all duration-300">
                    <ShinyText text="Resume" disabled={false} speed={3} className="" color="#ffffff" shineColor="#86efac" />
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
