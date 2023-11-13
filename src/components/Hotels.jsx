import lakeside from "../images/lakeside.png";
import oculous from "../images/oculous.png";
import recce from "../images/recce.png";
import fireside from "../images/fireside.png";

const Hotels = () => {
  const countries = [
    {
      img: lakeside,
      name: "Lakeside Motel Warefront",
      props: 2246,
    },
    {
      img: recce,
      name: "Recce Graham resort",
      props: 1278,
    },
    {
      img: fireside,
      name: "Fireside Dinners",
      props: 480,
    },
    {
      img: oculous,
      name: "Oculous Inn Stay",
      props: 320,
    },
  ];
  return (
    <section className="w-[90%] pt-[50px] mx-auto">
      <h1 className="font-bold text-[28px] text-[#181818]">Popular hotels</h1>
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

export default Hotels;
