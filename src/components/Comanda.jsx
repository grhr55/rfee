
import { motion } from "framer-motion";
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from "react-player";





import { Navigation, Pagination, Keyboard, Mousewheel ,Autoplay, FreeMode } from 'swiper/modules'




function Comanda({comandes ,products}) {

      const [activeIndex, setActiveIndex] = useState(0);


      const videoproduct = products.filter(p => !!p.video);
      const result = videoproduct.length >= 4 ? videoproduct : [];










  return (


<div className="bg-[rgb(244,246,248)]  h-[100%]  md-[200px] ">

  <div className=" flex justify-center  ">
    <h1  className="text-[clamp(28px,4vw,44px)] pt-[100px] font-semibold"  >Наша команда</h1>
  </div>

  <div className="text-center text-[clamp(19px,4vw,24px)]  m-0 p-0 leading-tight ">
    <h1>Опытные менеджеры поддерживают наших клиентов  </h1>
  </div>

{products.length > 0 && (<div className=" flex justify-center pt-[40px] ">

<div className="inline-grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[20px]">
  {comandes.map((comande, index) => (
    <motion.div
      key={comande._id}
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img  alt="разное" loading="lazy"
        className="2xl:w-[411px] xl:w-[306px] lg:w-[306px] md:w-[306px] sm:w-[306px] w-[198px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] h-[240px] 2xl:h-[496px] rounded-[19px] object-cover"
        src={`https://rrfe.onrender.com/team${comande.img}`}
        alt={comande.name}
      />
      <h1 className="2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute pt-[12px] m-0 p-0 leading-tight flex justify-center bottom-[164px] left-[32px] text-black font-medium text-[clamp(20px,4vw,24px)] z-20">
        {comande.imu} {comande.famel}
      </h1>
      <h1 className="2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute m-0 p-0 leading-tight flex justify-center bottom-[132px] left-[32px] text-[rgba(0,0,0,0.5)] font-normal text-[clamp(20px,4vw,20px)] z-20">
        {comande.dolg}
      </h1>
      <h1 className="2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute m-0 p-0 leading-tight pt-[12px] pb-[8px] flex justify-center bottom-[84px] left-[32px] text-[rgba(245,14,48,1)] font-normal text-[clamp(20px,4vw,24px)] z-20">
        <span>+{comande.nomer}</span>
      </h1>

      <div className="flex justify-center gap-[8px]">
        <a href={comande.tg}>
          <img  alt="разное" loading="lazy"
            src="/img/Frame.png"
            className="2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute bottom-[32px] min-[1920px]:w-[36px] max-[400px]:w-[26px] min-[1920px]:h-[36px] max-[400px]:h-[26px] left-[32px] font-normal text-[clamp(20px,4vw,20px)] z-20"
          />
        </a>
        <a href={comande.vauder}>
          <img  alt="разное" loading="lazy"
            src="/img/Frame (1).png"
            className="2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute bottom-[32px] min-[1920px]:w-[36px] max-[400px]:w-[26px] min-[1920px]:h-[36px] max-[400px]:h-[26px] left-[80px] font-normal text-[clamp(20px,4vw,20px)] z-20"
          />
        </a>
      </div>
    </motion.div>
  ))}
</div>




</div>)}
<section  id="reviews">


  <div>
  <h1  className=" text-center pt-[100px] text-[clamp(28px,4vw,44px)]  pb-[40px]  font-semibold"    >Отзовы клиентов</h1>
</div>


{products.length > 0 && (<div className="hidden min-[729px]:flex relative">
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
  autoplay={{
  delay: 9000,              
  disableOnInteraction: true, 
  pauseOnMouseEnter: true,
}}
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
            src={product.vid}
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


{products.length > 0 && (<div className="hidden min-[1543px]:flex">
     
  <div className="absolute 2xl:top-[240px] xl:top-[550px]  top-[590px]  left-1/2 -translate-x-[1055%] 2xl:-translate-x-[1390%] -translate-y-1/2 z-10 custom-prev">
  <button className="w-12 h-12 rounded-full bg-[rgb(255,0,0)] hover:text-[rgb(0,0,0)] text-white text-[21px] font-bold hover:bg-[rgb(244,246,248)]">
    ‹
  </button>
</div>


<div className="absolute 2xl:top-[240px] xl:top-[550px]  top-[590px]  left-1/2 translate-x-[950%] 2xl:translate-x-[1300%] -translate-y-1/2 z-10 custom-next">
  <button className="w-12 h-12 rounded-full bg-[rgb(255,0,0)]  hover:text-[rgb(0,0,0)] text-white   text-[21px]  font-bold hover:bg-[rgb(244,246,248)]">
    ›
  </button>
</div>
</div>)}

</div>)}

 {products.length > 0 && (
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
              src={product.vid}
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

</div>)}



</section>


 


  
  
  </div>


  );
}


export default Comanda
