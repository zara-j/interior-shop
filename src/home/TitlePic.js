import titleBg01 from '../assets/bg03.jpg';

const TitlePic = () => {
  return (
    <div className="relative flex items-center justify-center lg:justify-end font-notoSans text-left">
      <img className="h-[50rem] w-screen object-cover" alt="Title Background" src={titleBg01} />
      
      <div className="absolute bg-rose-950 rounded-lg lg:w-[42rem] p-5 sm:p-8 sm:mr-32 md:p-10 lg:p-12 lg:right-[300px]">
        <div className="container text-left p-4">
          <p className="text-lg sm:text-xl text-light">New Arrival</p>
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-amber-500 font-bold mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-light text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec ullamcorper mattis.
          </p>
          <button className="bg-amber-500 text-light font-bold py-4 px-6 lg:px-16 sm:py-4 mt-3 mb-0 sm:w-auto"
            style={{ paddingLeft: '3.5rem', paddingRight: '3.5rem' }}>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitlePic;
