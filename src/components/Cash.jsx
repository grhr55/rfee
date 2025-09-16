
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



import { Navigation, Pagination, Keyboard, Mousewheel ,Autoplay,  } from 'swiper/modules'



function Cash({products}) {

       function groupIntoChunks(array, chunkSize = 3) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}


  return (


    <div className="bg-[#ffffff] w-[100%] relative 2xl:h-[1000px] xl:h-[900px] lg:h-[900px] md:h-[1000px] sm:h-[1000px] h-[800px]">
    
    <div className=" hidden min-[1220px]:flex">
    
     <div>
         <div className="absolute 2xl:top-[730px] xl:top-[730px]  top-[730px]  left-1/2 -translate-x-[1055%] 2xl:min-[1920px]:-translate-x-[1390%] max-[1900px]:-translate-x-[1230%] -translate-y-1/2 z-10 custom-prev">
      <button className="w-12 h-12 rounded-full bg-[rgb(255,0,0)] hover:text-[rgb(0,0,0)] text-white text-[21px]  font-bold hover:bg-[rgb(244,246,248)]">
        ‹
      </button>
    </div>
    
    
    <div className="absolute 2xl:top-[730px] xl:top-[730px]  top-[730px]  left-1/2 translate-x-[950%] 2xl:min-[1920px]:translate-x-[1280%] max-[1900px]:translate-x-[1130%]  -translate-y-1/2 z-10 custom-next">
      <button className="w-12 h-12 rounded-full bg-[rgb(255,0,0)] hover:text-[rgb(0,0,0)] text-white   text-[21px]  font-bold hover:bg-[rgb(244,246,248)]">
        ›
      </button>
    </div>
     </div>
    </div>
      
    
   <motion.div
  className="flex justify-center 2xl:pl-0 xl:pl-0 lg:pl-[100px] md:pl-[100px] sm:pl-[100px] px-4 mt-[100px]"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  <div>  
    <div className="hidden min-[600px]:flex">
      <h1 className="text-[clamp(28px,6vw,44px)] flex m-0 p-0 leading-tight font-semibold mt-[100px]">
        Более 200 автомобилей <br/>привезено за 2022
      </h1>
    </div>
    <div className="flex min-[600px]:hidden">
      <h1 className="text-[clamp(28px,6vw,44px)] m-0 p-0 leading-tight font-semibold">
        Более 200 <br/>автомобилей<br/>привезено за 2022
      </h1>
    </div>
    <div className="flex justify-start 2xl:max-[1920px]:gap-[98px] min-[1900px]:gap-[260px] xl:gap-[99px] lg:max-[1279px]:gap-[20px] min-[1230px]:gap-[98px] gap-[20px] flex-wrap">
      <div className="hidden min-[600px]:flex">
        <h1 className="mt-[20px] text-[clamp(16px,6vw,24px)]">
          Проверяем всю историю обслуживания, владения <br/>и ДТП с помощью платных сервисов, созданных <br/>для профессиональных продавцов автомобилей.
        </h1>
      </div>
      <div className="flex min-[600px]:hidden">
        <h1 className="mt-[20px] text-[clamp(16px,4vw,24px)]">
          Проверяем всю историю обслуживания, <br/>владения и ДТП с помощью платных <br/> сервисов, созданных <br/>для профессиональных продавцов автомобилей.
        </h1>
      </div>
      <div className="w-[410px]box-border border-[3px] h-[107px] border-[rgba(250,0,44,0.15)] font-semibold m-0 p-0 leading-tight text-[clamp(18px,6vw,24px)] px-[30px] pt-[9px] pb-[9px] rounded-[10px]">
        <div className="hidden min-[600px]:flex"> 
          <h1>
            Мы помогли сэкономить клиентам<br/> около <span className="text-[44px] text-[rgba(245,14,48,1)]">240 000 000 ₽</span>
          </h1>
        </div>
        <div className="flex min-[600px]:hidden">
          <h1>
            Мы помогли сэкономить клиентам около <br/> <span className="text-[28px] text-[rgba(245,14,48,1)]">240 000 000 ₽</span>
          </h1>
        </div>
      </div>
    </div>
    <div className="hidden min-[600px]:flex">
      <a>
        <button
          onClick={() => {
            const section = document.getElementById("zauvs");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="w-[235px] h-[56px] mt-[32px] mb-[45px] bg-[rgb(245,14,48)] text-white hover:text-black hover:bg-[rgb(221,221,224)] rounded-[8px]"
        >
          <h1 className="text-[clamp(20px,4vw,20px)] font-bold">Оставить заявку</h1>
        </button>
      </a>
    </div>
  </div>
</motion.div>
      
    
    
      <div className="hidden min-[1200px]:flex  pb-[100px]    ">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel ,Autoplay]}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
      
           allowTouchMove={true}
           loop={false}
          keyboard={{ enabled: true }}
          mousewheel={false}
          cssMode
          spaceBetween={20}
          style={{ width: "100%", height: "100%" }}

        >
          {groupIntoChunks(products, 3).map((productGroup, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center gap-[25px] ">
                {productGroup.map((product) => (
                  <div
                    key={product._id}
                    
                  >
                    <img  loading="lazy" className=" 2xl:min-[1920px]:w-[411px] max-[1900px]:w-[360px]   2xl:min-[1920px]:h-[309px] max-[1900px]:h-[289px]      rounded-[19px] bg-[rgba(217,217,217,1)] "
                      src={`  https://fourfeef.onrender.com/avto${product.img}`} 
                      alt={product.name}
                    />
                   
                        
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
    
    
    
        <div className=" flex min-[1200px]:hidden   relative z-10   "  >
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel ,Autoplay]}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{ clickable: true ,  el: '.my-pagination',  }}
          allowTouchMove={true}
          spaceBetween={0} 
    
         
          keyboard={{ enabled: true }}
         mousewheel={false}
          cssMode
         
          style={{ width: "100%", height: "100%" }}
    
    
     breakpoints={{
        0: {
          slidesPerView: 1.2, 
           spaceBetween: 6,
        },
      
        1140:{
          slidesPerView: 3,
           
          spaceBetween: 3, 
        },
        773:{
      slidesPerView: 2,
           
          spaceBetween: 0, 
        },
           700: {
          slidesPerView: 1.9, 
           spaceBetween: 13,
        },
             400: {
          slidesPerView: 1.5, 
           spaceBetween: 13,
        },
      }}
    
        >
          
        
        
           {products.map(product => (
           <SwiperSlide key={product._id}>
           <div className="flex justify-center pb-[40px] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-[32px]   ">
                
                  <div
                    key={product._id}
                  >
                    
                    <img   loading="lazy" className=" 2xl:min-[1920px]:w-[411px] 2xl:max-[1900px]:w-[360px] xl:w-[360px] lg:w-[360px] md:w-[360px] sm:w-[360px]    2xl:min-[1920px]:h-[309px] 2xl:max-[1900px]:h-[289px]  xl:h-[289px] lg:h-[289px]  md:h-[289px] sm:h-[289px]  w-[280px]  h-[200px]  mx-4     rounded-[19px] bg-[rgba(217,217,217,1)] "
                      src={`  https://fourfeef.onrender.com/avto${product.img}`} 
                      alt={product.name}
                    />  
                  </div>
               
            </div>
            
             
        </SwiperSlide>
        
        
      ))}
      
     <div className="   my-pagination flex justify-center  text-[18px] top-[100px] "></div>
    
    
      <div className="   top-[250px] flex justify-center mx-4   min-[600px]:hidden pt-[32px] " >
         
          <button    onClick={() => {
        const section = document.getElementById("zauvs");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }} className="w-[320px]       h-[56px]    bg-[rgb(245,14,48)] text-white hover:text-black hover:bg-[rgb(221,221,224)] rounded-[8px]">
          <h1 className="text-[clamp(20px,4vw,20px)] font-bold">
                            Оставить заявку
          </h1>
          </button>
          
      
      </div>
    
        </Swiper>
    
      
    </div>
    
      
    </div>

  );
}


export default Cash
