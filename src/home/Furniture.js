import Masonry from 'react-masonry-css';
import furniture1 from '../assets/furniture1.jpg';
import furniture2 from '../assets/furniture2.jpg'
import furniture3 from '../assets/furniture3.jpg';
import furniture4 from '../assets/furniture4.jpg';
import furniture5 from '../assets/furniture5.jpg';
import furniture6 from '../assets/furniture6.jpg';
import furniture7 from '../assets/furniture7.jpg';
import furniture8 from '../assets/furniture8.jpg';
import furniture9 from '../assets/furniture9.jpg';
import './messyMansory.css';

const Furniture = (
) => {
  const images = [
    furniture1, furniture2, furniture3,
    furniture4, furniture5, furniture6,
    furniture7,
  ];

  // Create arrays with the desired widths and heights for each image
const imageWidths = [380, 800, 400, 400, 400, 450, 400];
  const imageHeights = [100, 900, 450, 400, 400, 350, 200];

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    768: 2,
    500: 1,
  };

  return (
    <div className="bg-white pt-20">
      <div className="text-center mb-14">
        <p className="text-xl font-bold text-muted">
          Share your setup with
        </p>
        <h1 className="text-6xl font-bold text-gray-800">
          #CozyHomeFurniture
        </h1>
      </div>

      <div className="relative overflow-hidden">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-3"
          columnClassName="masonry-column">
          {images.map((img, index) => (
            <div key={index} className={`overflow-hidden img-${index}`}>
              <img
                src={img}
                alt={`furniture-${index}`}
                width={imageWidths[index]}
                height={imageHeights[index]}
                className="overflow-hidden my-3 object-cover transform scale-125 hover:scale-120 transition ease-in-out"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Furniture;
