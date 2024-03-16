import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function HomeContent() {
  const [currentImg, setCurrentImg] = useState(0);
  const imgSlides = [
    { id: 0, imgSrc: "../../public/img/carousel-1.jpg" ,title:'10% Off Your First Order', caption:'Fashionable Dress' },
    { id: 1, imgSrc: "../../public/img/carousel-2.jpg" ,title:'10% Off Your First Order', caption:'Reasonable Price'},
  ];

  function handlePrev() {
    setCurrentImg(currentImg === 0 ? imgSlides.length - 1 : currentImg - 1);
  }
  function handleNext() {
    setCurrentImg(currentImg === imgSlides.length - 1 ? 0 : currentImg + 1);
  }

  return (
    <div className="relative">
      <button
        onClick={()=>handlePrev()}
        className="absolute top-1/2 mx-4 text-stone-50 z-10">
        <HiChevronLeft />
      </button>
      <div className="object-scale-down">
        {imgSlides.map(
          (img, i) =>
            currentImg === i && (
              <img src={img.imgSrc} key={i} className="object-cover h-96 w-min brightness-50" />
            )
        )}
      </div>

      <p className=" font-poppins text-xl font-semibold uppercase absolute inset-y-1/3 left-1/2 text-stone-50 -translate-x-1/2">
        {imgSlides[currentImg].title}
      </p>
      <p className=" font-poppins text-5xl font-black absolute top-1/2 left-1/2 text-stone-50 -translate-x-1/2 ">
        {imgSlides[currentImg].caption}
      </p>

      <button
        onClick={()=>handleNext()}
        className="absolute top-1/2 right-0 mx-4 text-stone-50"
      >
        <HiChevronRight />
      </button>
    </div>
  );
}

export default HomeContent;