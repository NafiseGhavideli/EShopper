import { HiMiniMapPin,HiMiniEnvelope, HiMiniPhone} from "react-icons/hi2";
function ShopDetails() {
  return (
    <div className="flex font-poppins items-center leading-8 justify-around mt-20">
      <p className=" basis-1/2"><h2 className=" text-4xl font-bold mb-4">Contact Us</h2>
       At EShopper, we're your one-stop shop for expressing yourself and staying connected.
       We offer a curated selection of stylish clothing and accessories to suit every taste,
        from everyday essentials to statement pieces. Find the perfect outfit to elevate your
         wardrobe, or discover unique jewelry to add a touch of personal flair. And whether
          you're a tech enthusiast or simply need everyday essentials, we carry a wide range
           of electronics to keep you entertained and informed. From smartphones and laptops
            to headphones and home entertainment systems, we have everything you need to stay
             on top of your digital world.
      </p>
      <div className="">
      <div className="flex gap-2 items-center"><HiMiniPhone /><p>+012 345 67890</p>  </div>
      <div className="flex gap-2 items-center"><HiMiniEnvelope /><p>info@example.com</p>  </div>
      <div className="flex gap-2 items-center "><HiMiniMapPin /><p>123 Street, New York, USA</p>  </div>

      </div>
    </div>

  )
}

export default ShopDetails
