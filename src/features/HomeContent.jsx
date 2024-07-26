import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function HomeContent() {
  const [currentImg, setCurrentImg] = useState(0);
  const imgSlides = [
    { id: 0, imgSrc: "../../public/carousel-1.jpg" ,title:'10% Off Your First Order', caption:'Fashionable Dress' },
    { id: 1, imgSrc: "../../public/carousel-2.jpg" ,title:'10% Off Your First Order', caption:'Reasonable Price'},
  ];

  function handlePrev() {
    setCurrentImg(currentImg === 0 ? imgSlides.length - 1 : currentImg - 1);
  }
  function handleNext() {
    setCurrentImg(currentImg === imgSlides.length - 1 ? 0 : currentImg + 1);
  }

  return (
    <>
      <div>
      <button
        onClick={()=>handlePrev()}
        className="absolute top-1/2 mx-8 text-stone-50 z-10">
        <HiChevronLeft />
      </button>


        {imgSlides.map((img) => img.id ===currentImg &&<img src={`/carousel-${img.id+1}.jpg`} alt={img.caption} key={img.imgSrc} className="object-cover h-96 w-min mx-auto brightness-50" /> )}
        
      <button
        onClick={()=>handleNext()}
        className="absolute top-1/2 right-0 mx-8 text-stone-50 z-10"
      >
        <HiChevronRight />
      </button>
      </div>

      <p className=" font-poppins text-xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-center font-semibold absolute top-40 left-1/2 text-stone-50 -translate-x-1/2 ">
      <p className=" text-[0.5rem] md:text-xl sm:text-sm  xl:font-semibold uppercase font-[400]">
        {imgSlides[currentImg].title}
      </p>
        {imgSlides[currentImg].caption}
      </p>

          </>
   
  );
}

export default HomeContent;