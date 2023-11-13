import sydeny from "../images/sydeny.png";
import vegan from "../images/vegan.png";
import mountain from "../images/mountain.png";

const Trips = () => {
  const hotels = [
    {
      img: sydeny,
      name: "Sydeny’s 10 most fashionable 5 star hotels",
      props:
        "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
    },
    {
      img: vegan,
      name: "Top cities for Vegan Travellers",
      props:
        "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    },
    {
      img: mountain,
      name: "World’s top destinations during and post covid timeline",
      props:
        "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    },
  ];
  return (
    <section className="w-[90%] pt-[50px] mx-auto">
      <h1 className="font-bold text-[22px] md:text-[28px] text-[#181818]">
        Get inspiration for your next trip
      </h1>
      <div className="flex flex-wrap justify-center gap-[20px] mt-[20px]">
        {hotels.map((element, index) => (
          <div
            key={index}
            style={{
              background: `url(${element.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="grow w-full md:w-[300px] h-[280px] p-[20px] rounded-lg flex flex-col justify-end gap-[10px]"
          >
            <h2 className="font-bold text-[20px] text-white">{element.name}</h2>
            <p className="text-white">{element.props}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trips;
