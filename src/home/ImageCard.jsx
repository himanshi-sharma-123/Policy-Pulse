import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../assets/55.png";
import image2 from "../assets/lic.png";
import fifteen from "../assets/15.jpeg";

const images = [
  {
    id: 1,
    image: fifteen,
    date: "March 15 2024",
  },

  {
    id: 2,
    image: image2,
    date: "March 13 2024",
  },
  {
    id: 3,
    image: image1,
    date: "March 12 2024",
  },

  // {
  //   id: 4,
  //   image: image2,
  //   date: "March 11 2024",
  // },
  // {
  //   id: 5,
  //   image: image1,
  //   date: "March 10 2024",
  // },

  // {
  //   id: 6,
  //   image: image2,
  //   date: "March 09 2024",
  // },
  // {
  //   id: 7,
  //   image: image1,
  //   date: "March 08 2024",
  // },

  // {
  //   id: 8,
  //   image: image2,
  //   date: "March 07 2024",
  // },
];
const ImageCard = () => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h1 className="text-5xl text-center font-bold text-black my-5">
        Daily Events
      </h1>

      {/* cards*/}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              {/* <Link to={`/book/${book._id}`}> */}
              <div className="relative">
                <img src={img.image} alt="" />
              </div>
              <div>
                <div>
                  <h3>{img.date}</h3>
                  {/* <p>{book.authorName}</p> */}
                </div>
                <div>{/* <p>${book.price}</p> */}</div>
              </div>
              {/* </Link> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCard;
