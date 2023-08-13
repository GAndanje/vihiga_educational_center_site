import { useEffect, useState } from 'react';
import './App.css'
import { GiHamburgerMenu } from 'react-icons/gi'
function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (

    <>
      <div className="w-full max-w-[1440px] h-full ">
        <div className="flex flex-col gap-2 w-full max-w-[1440px] bg-white text-white h-screen ">
          <div className="bg-[url('https://res.cloudinary.com/dexmcptak/image/upload/v1690924833/samples/bike.jpg')] bg-fixed bg-no-repeat bg-cover bg-top ">
            <div className=" w-full  flex flex-col   bg-gradient-to-r from-[#04091EB3] to-[#121212b3] p-2">
              <div className="flex w-full sm:max-w-[1440px] md:max-w-[1440px]   justify-between items-center sm:flex-row sm:justify-between sm:items-center sm:gap-[100px]  sm:pr-4 md:flex-row md:justify-between md:items-center md:gap-[100px] pl-2 md:pr-4">

                <div className="grow md:ml-20 sm:ml-20">
                  <a href="">
                    <img src="https://res.cloudinary.com/dexmcptak/image/upload/v1690924826/samples/cloudinary-logo-vector.svg" alt="school logo" className="w-[100px] h-[100px] " />
                  </a>
                </div>


                {isDesktop ? (
                  <nav className={`grow-[2] border  rounded-lg sm:flex md:flex flex-col justify-around py-2 gap-2 sm:flex-row md:flex-row hidden `}>
                    <div className=" rounded-md p-2  ease-out duration-300 hover:underline decoration-red-900 decoration-[3px]  ">HOME</div>
                    <div className=" rounded-md p-2  ease-out duration-300 hover:underline decoration-red-900 decoration-[3px] ">ABOUT US</div>
                    <div className=" rounded-md p-2  ease-out duration-300 hover:underline decoration-red-900 decoration-[3px] ">COURSE</div>
                    <div className=" rounded-md p-2  ease-out duration-300 hover:underline decoration-red-900 decoration-[3px] ">BLOG</div>
                    <div className=" rounded-md p-2  ease-out duration-300 hover:underline decoration-red-900 decoration-[3px] ">CONTACT</div>
                  </nav>
                ) : (<GiHamburgerMenu className="mr-2 " />)}



              </div>
              <div className=" w-full max-w-[1440px] flex flex-col justify-center items-center gap-14 max-h-screen  h-screen text-white">


                <h1 className=' text-3xl font-bold sm:font-extrabold sm:text-5xl md:font-extrabold md:text-5xl  '>Vihiga Education City</h1>

                <p className=' text-center font-extralight text-xl md:text-xl sm:text-xl md:font-normal sm:font-normal'>Welcome to Vihiga Education City , a place where young minds blossom! From kindergarten to junior secondary, we create a joyful and supportive learning environment. <br />
                  Our dedicated teachers inspire curiosity and creativity, nurturing a love for learning in every child. Together, we lay the foundation for a bright future, fostering academic excellence and character development.
                </p>
                <a href="#"><button type="button" className=' bg-red-950  hover:bg-transparent  hover:duration-300 p-2 rounded-lg hover:border hover:border-black hover:ease-in-out outline-none z-10'>View Us For More</button></a>
              </div>
            </div>

          </div>

          <div className="text-black ">
            <div className="flex flex-col items-center ">
              <h2 className='text-xl font-extrabold mt-12 sm:text-4xl '>Services Offered</h2>
              <p className='mt-4 font-thin'>Kindergarten, Primary and Junior Secondary</p>
            </div>
            <div className="flex flex-col mt-4 px-2 md:mt-16 md:px-4 md:flex-row md:justify-center gap-4 md:gap-10 w-full justify-center items-center">
              <div className=" bg-[#d3d3d3] hover:shadow-2xl p-[10px] rounded border-gray-700  max-w-[300px] mt-[5%] px-[12px] py-[20px] ease-in-out duration-300">
                <h3 className="text-center text-3xl font-semibold my-[10px]">Kindergarten</h3>
                <p className='text-center font-[300] text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut autem minima ullam adipisci, voluptate amet in voluptatibus nemo rerum cum enim velit sint magnam, et molestias. Eveniet, vel. Deserunt!
                </p>
              </div>
              <div className=" bg-[#d3d3d3] hover:shadow-2xl p-[10px] rounded border-gray-700  max-w-[300px] mt-[5%] px-[12px] py-[20px] ease-in-out duration-300">
                <h3 className="text-center text-3xl font-semibold my-[10px]">Kindergarten</h3>
                <p className='text-center font-[300] text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut autem minima ullam adipisci, voluptate amet in voluptatibus nemo rerum cum enim velit sint magnam, et molestias. Eveniet, vel. Deserunt!
                </p>
              </div>
              <div className=" bg-[#d3d3d3] hover:shadow-2xl p-[10px] rounded border-gray-700  max-w-[300px] mt-[5%] px-[12px] py-[20px] ease-in-out duration-300">
                <h3 className="text-center text-3xl font-semibold my-[10px]">Kindergarten</h3>
                <p className='text-center font-[300] text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut autem minima ullam adipisci, voluptate amet in voluptatibus nemo rerum cum enim velit sint magnam, et molestias. Eveniet, vel. Deserunt!
                </p>
              </div>

            </div>
          </div>
          <div className="text-black">
            <h3 className="">Kindergarten</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut autem minima ullam adipisci, voluptate amet in voluptatibus nemo rerum cum enim velit sint magnam, et molestias. Eveniet, vel. Deserunt!
            </p>
          </div>
          <div className="text-black">
            <h3 className="">Kindergarten</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut autem minima ullam adipisci, voluptate amet in voluptatibus nemo rerum cum enim velit sint magnam, et molestias. Eveniet, vel. Deserunt!
            </p>
          </div>
          <div className="text-black">
            <h3 className="">Kindergarten</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut autem minima ullam adipisci, voluptate amet in voluptatibus nemo rerum cum enim velit sint magnam, et molestias. Eveniet, vel. Deserunt!
            </p>
          </div>
          <div className="text-black">
            <h3 className="">Kindergarten</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut autem minima ullam adipisci, voluptate amet in voluptatibus nemo rerum cum enim velit sint magnam, et molestias. Eveniet, vel. Deserunt!
            </p>
          </div>
          <div className="text-black">
            <h3 className="">Kindergarten</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut autem minima ullam adipisci, voluptate amet in voluptatibus nemo rerum cum enim velit sint magnam, et molestias. Eveniet, vel. Deserunt!
            </p>
          </div>
          <div className="text-black">
            <h3 className="">Kindergarten</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut autem minima ullam adipisci, voluptate amet in voluptatibus nemo rerum cum enim velit sint magnam, et molestias. Eveniet, vel. Deserunt!
            </p>
          </div>
          <div className="text-black">
            <h3 className="">Kindergarten</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut autem minima ullam adipisci, voluptate amet in voluptatibus nemo rerum cum enim velit sint magnam, et molestias. Eveniet, vel. Deserunt!
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
