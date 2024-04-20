import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";

const images = [image1, image2, image3];

function Header() {
  return (
    <div className=" w-full  h-[100vh] 	bg-gradient-to-b	from-black to-slate-800">
      <div className="relative w-full h-full d-flex pt-20">
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt=""
          className="w-full h-full object-contain "
        />
      </div>
      <div className="absolute w-full h-[100vh] 	bg-gradient-to-t 	from-slate-800 to-transparent bottom-0 top-20  z-8 flex flex-col items-center justify-center pt-60  2xl:pt-40 px-4">
        <h1 className="text-white text-base		md:text-2xl font-bold">
          World Move is the world's most popular and authoritative source for
          movie !
        </h1>
        <div className="w-70 h-10 mt-5 md:h-14 rounded-full border border-green-300	py-2 md:py-1 px-5 ">
          <p className="text-green-600 	">
            You can download and watch all kinds
            <br className="hidden md:block" />
            of old and new movies on this website !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
