import australia from "../images/australia.png";
import greece from "../images/greece.png";
import japan from "../images/japan.png";
import newZealand from "../images/newZealand.png";

const Vacation = () => {
  const countries = [
    {
      img: australia,
      name: "Australia",
      props: 2246,
    },
    {
      img: japan,
      name: "Japan",
      props: 1278,
    },
    {
      img: newZealand,
      name: "New Zealand",
      props: 480,
    },
    {
      img: greece,
      name: "Greece",
      props: 320,
    },
  ];
  return (
    <section className="w-[90%] pt-[50px] mx-auto">
      <h1 className="font-bold text-[22px] md:text-[28px] text-[#181818]">
        Enjoy your dream vacation
      </h1>
      <p className="text-[#333333] mt-[16px]">
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
      <div className="flex flex-wrap justify-center gap-[20px] mt-[20px]">
        {countries.map((element, index) => (
          <div key={index} className="grow">
            <img src={element.img} className="w-full" />
            <h2 className="font-bold text-[20px] text-[#181818]">
              {element.name}
            </h2>
            <p className="text-[#181818]">{element.props} properties</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vacation;
