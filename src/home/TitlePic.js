import titleBg01 from '../assets/bg03.jpg';

const TitlePic = () => {
  return (
    <div className="relative flex items-center justify-center lg:justify-end font-notoSans">
      <img className="h-screen w-screen object-cover" alt="Title Background" src={titleBg01} />
      
      <div 
        className="absolute bg-rose-950 rounded shadow-lg p-5 xl:mr-32 sm:p-8 md:p-10 lg:p-12"
        style={{ maxWidth: '90%', width: '100%', maxWidth: '700px' }}
      >
        <div className="container text-center lg:text-left">
          <p className="text-lg sm:text-xl text-light">New Arrival</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-500 font-bold mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-light text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec ullamcorper mattis.
          </p>
          <button 
            className="bg-amber-500 text-black py-3 sm:py-4 mt-3 mb-0 w-full sm:w-auto"
            style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitlePic;
