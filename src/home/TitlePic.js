import titleBg01 from '../assets/bg03.jpg';

const TitlePic = (
) => {
  return (
    <div className="relative flex items-center justify-end font-notoSans">
      <img className="h-screen w-screen object-cover" alt="Title Background" src={titleBg01} />
      <div className="max-w-2xl bg-rose-950 rounded shadow-lg p-5 mr-12" style={{ position: 'absolute' }}>
        <div className="container">
          <p className="text-xl text-light">New Arrival</p>
          <h1 className="text-amber-500 text-7xl font-bold mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-light text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus nec ullamcorper mattis.
          </p>
          <button className="bg-amber-500 text-black py-4 mt-3 mb-0" style={{ paddingLeft: '5rem', paddingRight: '5rem' }}>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitlePic;
