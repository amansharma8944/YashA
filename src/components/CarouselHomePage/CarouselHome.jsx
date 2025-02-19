import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
  {
    description:
      "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

const TailwindCarousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container mx-auto"
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      slidesToSlide={1}
      swipeable
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden p-4 mx-2 h-[62vh] flex flex-col "
        >
          <div
            className="h-48 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className="mt-4 h-[48%] flex flex-col justify-between">
            <h2 className="text-lg font-bold">{item.headline}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="mt-4 flex space-x-2">
              <a
                href="https://w3js.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
              >
                Share
              </a>
              <a
                href="https://w3js.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TailwindCarousel;
