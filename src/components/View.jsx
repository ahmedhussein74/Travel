import bg from '../images/view.svg'

const View = () => {
  return (
    <section style={{
      background:`url(${bg})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center'
    }} className="w-full lg:w-[90%] h-[280px] mt-[30px] mx-auto flex flex-col items-center justify-center gap-[15px] rounded-0 lg:rounded-lg">
      <h1 className="text-[24px] md:text-[28px] font-bold text-white text-center px-1 lg:px-[50px]">
        Download the mobile application for bonus coupons and travel codes
      </h1>
      <button className="w-[180px] h-[40px] bg-[#2F80ED] text-white rounded">Download the app</button>
    </section>
  );
}

export default View