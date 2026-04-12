import { TypeAnimation } from "react-type-animation";
const HeroImg = "https://i.pinimg.com/736x/3d/3b/f1/3d3bf1f13bc997907db8aa68e4ab5153.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-row items-center lg:px-50 sm:pt-0 sm:pb-0 pt-60 pb-10 px-5 sm:h-screen h-full w-full">
        <div className="h-auto sm:w-3/5 w-full">
          <div className="flex flex-col justify-between sm:gap-6 gap-2">
            <h1 className="text-white font-bold sm:text-6xl text-3xl">Hi!</h1>
            <h1 className="text-white font-bold sm:text-6xl text-3xl">
              I'm Nishil Chavda
            </h1>
            <h1 className="text-white font-bold sm:text-5xl text-2xl">
              {/* MERN Stack Developer */}
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  1000, // Wait 1s
                  "Full Stack Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50} // Typing speed (ms per char)
                repeat={Infinity} // Loop infinitely
                style={{ fontSize: "1em", display: "inline-block" }}
              />
            </h1>
          </div>

          <button className="bg-radial from-green-800  from-1% to-green-900*2 sm:border-3 border-2 border-green-700 px-6 py-2 text-white rounded-full text-2xl font-bold sm:mt-10 mt-8">
            Contact Me
          </button>

          <div className="flex flex-row items-center justify-items-start sm:mt-5 mt-4 gap-4.5">
            {/* social */}
            <button className="bg-radial from-blue-600  from-1% to-blue-600*2 sm:border-3 border-2 border-blue-500 p-1 text-white rounded-full text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-9 sm:h-9 w-8 h-8"
                viewBox="0 0 640 640"
              >
                <path
                  fill="rgb(255, 255, 255)"
                  d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"
                />
              </svg>
            </button>
            <button className="bg-radial from-black-600  from-1% to-black-600*2 sm:border-3 border-2 border-black-500 p-1 text-white rounded-full text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-9 sm:h-9 w-8 h-8"
                viewBox="0 0 640 640"
              >
                <path
                  fill="rgb(255, 255, 255)"
                  d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"
                />
              </svg>
            </button>

            <button className="bg-radial from-pink-600  from-1% to-pink-600*2 sm:border-3 border-2 border-pink-500 p-1 text-white rounded-full text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-9 sm:h-9 w-8 h-8"
                viewBox="0 0 640 640"
              >
                <path
                  fill="rgb(255, 255, 255)"
                  d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-end h-auto sm:w-2/5">
          <img
            src={HeroImg}
            className="hidden sm:block rounded-full w-100 h-100 object-cover"
            alt=""
          />
          <img
            src={HeroImg}
            className="block sm:hidden rounded-full w-50 h-50 object-cover absolute top-25 right-5"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
