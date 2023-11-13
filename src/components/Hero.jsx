import bg from "../images/bg.png";

const Hero = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full lg:w-[90%] h-[500px] mt-[10px] mx-auto lg:rounded-lg text-white flex flex-col justify-center items-center gap-[20px]"
    >
      <h1 className="text-[32px] text-center font-bold">Enjoy Your Dream Vacation</h1>
      <p className="w-[80%] lg:w-[60%] text-[20px] text-center">
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
    </section>
  );
};

export default Hero;
