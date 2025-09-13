import { useState  } from 'react';
import { Navigation, Pagination, Keyboard, Mousewheel ,Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from "react-player"
import { motion } from "framer-motion";



function Obzor({products}) {


     const [activeIndex, setActiveIndex] = useState(0);


     const videoproduct = products.filter(p => !!p.video);
     const result = videoproduct.length >= 4 ? videoproduct : [];





  return (


    <div className="bg-[rgb(244,246,248)]  w-full h-[100%]">
     <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="text-center 2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[100px] sm:pt-[64px] pt-[64px]"
>
  <h1 className="text-[clamp(28px,10vw,44px)] font-bold text-black">
    Обзоры привезенных авто
  </h1>
</motion.div>
    
    
{products.length > 0 && (     <div className="hidden min-[729px]:flex relative">
 <Swiper
  modules={[Keyboard, Mousewheel, Navigation, Pagination, Autoplay, FreeMode]}
  pagination={{ clickable: true }}
  navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
  keyboard={{ enabled: true }}
  mousewheel={false}
 

 
  initialSlide={0}            
  freeMode={true}   
  slidesPerView={3}
  simulateTouch={true}
  spaceBetween={50}
 
  grabCursor={true}
  allowTouchMove={true}
  style={{ width: "100%", height: "100%" }}

breakpoints={{ 
 
    680: {
    slidesPerView: 1.4,
    spaceBetween: 10,
    centeredSlides: true,
  },
  768: {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides: true,
  },
  1400: {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
  },
  1615: {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
  },}}




  slideToClickedSlide={true} 
  centeredSlides={true}       
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
     
      
     
  

>
{videoproduct.map((product, index) => {
  const isActive = index === activeIndex;

  return (
    <SwiperSlide key={product._id}>
      <div className="flex justify-center  mt-10">
        <div className="video-wrapper relative overflow-hidden rounded-xl shadow-md">
          <ReactPlayer
            src={product.video}
            width="100%"
            height="100%"
     
          />
        </div>
      </div>
    </SwiperSlide>
    
  );
  
})}
<div className=" text-center">
        <h1 className="text-xl font-semibold transition-all flex justify-center pt-5 pb-9 duration-300">
         <span className="text-[24px] font-medium pr-1">Привезли</span> <span className="font-bold text-[24px]">{videoproduct[activeIndex]?.marc}</span> <span className="text-[20px] font-medium pl-2 pr-2">За</span> <span className="text-[rgb(245,14,48)] text-[24px]">{videoproduct[activeIndex]?.print}<span className="pl-2">₽</span></span>
        </h1>
      </div>


</Swiper>
    
    
    <div className="hidden min-[1543px]:flex">
         
      <div className="absolute 2xl:top-[240px] xl:top-[550px]  top-[590px]  left-1/2 -translate-x-[1055%] 2xl:-translate-x-[1390%] -translate-y-1/2 z-10 custom-prev">
      <button className="w-12 h-12 rounded-full bg-[rgb(255,0,0)] hover:text-[rgb(0,0,0)] text-white text-[21px] font-bold hover:bg-[rgb(244,246,248)]">
        ‹
      </button>
    </div>
    
    {/* Правая стрелка (вправо) */}
    <div className="absolute 2xl:top-[240px] xl:top-[550px]  top-[590px]  left-1/2 translate-x-[950%] 2xl:translate-x-[1300%] -translate-y-1/2 z-10 custom-next">
      <button className="w-12 h-12 rounded-full bg-[rgb(255,0,0)]  hover:text-[rgb(0,0,0)] text-white   text-[21px]  font-bold hover:bg-[rgb(244,246,248)]">
        ›
      </button>
    </div>
    </div>
    
    </div>)}
    
      <div className="flex min-[729px]:hidden">
<Swiper
  modules={[Keyboard, Mousewheel, Navigation, Pagination, FreeMode]}
  pagination={{ clickable: true }}
  navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
  keyboard={{ enabled: true }}
 mousewheel={false}

  cssMode
  initialSlide={0}
  slidesPerView={3}
  simulateTouch={true}
  spaceBetween={50}
 
  allowTouchMove={true}
  style={{ width: "100%", height: "100%" }}

  centeredSlides={true}
  slideToClickedSlide={true}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  breakpoints={{
    350: {
      slidesPerView: 1.15,
      spaceBetween: 10,
      centeredSlides: true,
    },
    480: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true,
    },
    730: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
    },
    
  }}
>
  {videoproduct.map((product, index) => {
    const isActive = index === activeIndex;
    return (
      <SwiperSlide key={product._id}>
        <div className="flex justify-center pt-5">
          <div className=" relative overflow-hidden rounded-xl shadow-md w-[313px] h-[200px]">
            <ReactPlayer
              src={product.video}
              width="100%"
              height="100%"
         
            />
          </div>
        </div>
      </SwiperSlide>
    );
  })}

  <div className="text-center">
    <h1 className="text-xl font-semibold transition-all flex justify-center pt-5 pb-9 duration-300">
      <span className="text-[clamp(14px,4vw,24px)] font-medium pr-1">Привезли</span>
      <span className="font-bold text-[clamp(14px,4vw,24px)]">{videoproduct[activeIndex]?.marc}</span>
      <span className="text-[clamp(14px,4vw,24px)] font-medium pl-2 pr-2">За</span>
      <span className="text-[rgb(245,14,48)] text-[clamp(14px,4vw,24px)]">
        {videoproduct[activeIndex]?.print}
        <span className="pl-2">₽</span>
      </span>
    </h1>
  </div>
</Swiper>
    
    </div>
    <div className=" flex justify-center pt-[100px] 2xl:pb-[100px] xl:pb-[100px] lg:pb-[100px]  pb-[63px] flex-wrap gap-[77px]">
      <div className="px-4">
      <img  alt="разное" loading="lazy" src='/img/image 199.png'></img>
    </div>
    
    <div>
      <h1 className="text-[clamp(28px,4vw,44px)] px-4 font-bold">Посмотрите реальные<p>истории в нашем </p><p className="text-[rgb(245,14,48)]">Telegram-канале</p></h1>
    <div className=" hidden min-[800px]:flex ">
       <a href='https://t.me/Rocetk66' className="mx-2">
                        <button className="2xl:w-[240px] xl:w-[250px] lg:w-[250px]  md:w-[250px] sm:w-[250px] w-[331px]  h-[50px] mt-[32px] 2xl:ml-0 xl:ml-4 lg:ml-4  md:ml-4  sm:ml-4 ml-0   2xl:h-[56px] bg-[rgb(245,14,48)] text-white hover:text-black hover:bg-[rgb(221,221,224)] rounded-[8px]">
                          <h1 className="text-[clamp(20px,4vw,20px)] font-bold">
                            Перейти в Telegram 
                          </h1>
                        </button>
      </a>
    </div>
    <div className="flex min-[800px]:hidden">
       <a className="mx-2">
                        <button   onClick={() => {
        const section = document.getElementById("zauvs");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }} className="2xl:w-[240px] xl:w-[250px] lg:w-[250px]  md:w-[250px] sm:w-[250px] w-[331px]  h-[50px] mt-[32px] 2xl:ml-0 xl:ml-4 lg:ml-4  md:ml-4  sm:ml-4 ml-0   2xl:h-[56px] bg-[rgb(245,14,48)] text-white hover:text-black hover:bg-[rgb(221,221,224)] rounded-[8px]">
                          <h1 className="text-[clamp(20px,4vw,20px)] font-bold">
                              Оставить заявку
                          </h1>
                        </button>
      </a>
    </div>
    </div>
    </div>
    
    
    
    </div>
    



  );
}


export default Obzor