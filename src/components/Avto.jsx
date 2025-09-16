
import { motion } from "framer-motion";


import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";





import { Navigation, Pagination, Keyboard, Mousewheel ,Autoplay,  } from 'swiper/modules'

function Avto({products}) {

  const isLoading = !products || products.length === 0; 

 




     function groupIntoChunks(array, chunkSize = 3) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}



  return (
    


        <div className="relative  min-[1920px]:h-[1120px]  max-[1536px]:h-[980px]  bg-[rgb(244,246,248)] ">
          
        <motion.div
  className="px-4 2xl:px-96 xl:px-72 lg:px-60 2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[100px] sm:pt-[64px] pt-[64px] md:px-20 sm:px-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  }}
>
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }}
  >
    <h1 className="text-[clamp(28px,8vw,44px)] text-left font-extrabold">
      Какие авто привозим?
    </h1>
  </motion.div>

  <motion.div
    className="mt-2"
    variants={{
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }}
  >
    <h1 className="text-[clamp(16px,4vw,24px)] text-left font-normal">
      Привозим авто не старше 7 лет на момент растаможки.
    </h1>
  </motion.div>
</motion.div>
       <div >
    
    
    
       <div>
     <div>
 
    
      
  {products.length > 0 && (    <div className="hidden min-[1000px]:flex">
      
       <div className="absolute 2xl:top-[630px] xl:top-[540px]  top-[540px]  left-1/2 -translate-x-[880%] 2xl:-translate-x-[1148%] -translate-y-1/2 z-10 custom-prev">
      <button className="w-[60px] h-[60px] rounded-full bg-[rgb(255,0,0)] hover:text-[rgb(0,0,0)] text-white text-[30px]  font-bold hover:bg-[rgb(244,246,248)]">
        ‹
      </button>
    </div>
    
  
    <div className="absolute 2xl:top-[630px] xl:top-[540px]  top-[540px]  left-1/2 translate-x-[780%] 2xl:translate-x-[1038%] -translate-y-1/2 z-10 custom-next">
      <button className="w-[60px] h-[60px] rounded-full bg-[rgb(255,0,0)] hover:text-[rgb(0,0,0)] text-white   text-[30px]  font-bold hover:bg-[rgb(244,246,248)]">
        ›
      </button>
    </div>
    
    
      <Swiper
      modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
      navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
      pagination={{ clickable: true }}
      allowTouchMove={true}
      mousewheel={false}
      cssMode
      spaceBetween={20}
      style={{ width: "100%", height: "100%" }}
    >
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center gap-[20px] p-[20px]">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-[10px] p-[24px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] w-[305px] h-[644px] 2xl:w-[411px] 2xl:h-[739px]"
                  >
                    <Skeleton height={290} className="rounded-md" />
                    <Skeleton height={40} className="mt-[30px]" />
                    <Skeleton height={30} className="mt-[10px]" />
                    <Skeleton height={30} className="mt-[10px]" />
                    <Skeleton height={30} className="mt-[10px]" />
                     <Skeleton height={30} className="mt-[10px]" />
                      <Skeleton height={40} className="mt-[10px]" />
                       <Skeleton height={40} className="mt-[5px]" />
                       <Skeleton height={60} className="mt-1" />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))
        : groupIntoChunks(products, 3).map((productGroup, index) => (
            <SwiperSlide key={index}>
        <div className="flex justify-center 2xl:h-[806px] mt-[40px] h-[709px] gap-[20px] p-[20px]">
  {productGroup.map((product, index) => (
    <motion.div
      key={product._id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
      className="bg-white rounded-[10px] p-[24px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] w-[305px] h-[644px] 2xl:w-[411px] 2xl:h-[739px] text-left"
    >
      <img   loading="lazy"
        className="w-[260px] h-[200px] 2xl:w-[363px] 2xl:h-[261px] object-cover rounded-[12px]"
        src={`  https://fourfeef.onrender.com/avto${product.img}`}
        alt={product.name}
        
      />
      <h1 className="text-[18px] 2xl:text-[24px] font-bold pt-[24px]">
        {product.marc}
      </h1>

      <h1 className="flex items-center justify-between w-full max-w-full pt-[10px]">
        <span className="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]">Пробег</span>
        <img   loading="lazy"  src="/img/Vector 8.png" alt="Line" className="pt-[15px] w-[117px] 2xl:w-[220px] px-2" />
        <span className="whitespace-nowrap text-[20px] font-semibold">{product.probeg} км</span>
      </h1>

      <h1 className="flex items-center justify-between w-full max-w-full pt-[10px]">
        <span className="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]">Объем двигателя</span>
        <img   loading="lazy"  src="/img/Vector 8.png" alt="Line" className="pt-[15px] px-2 w-[100px] 2xl:w-[200px]" />
        <span className="whitespace-nowrap text-[20px] font-semibold">{product.dviga}</span>
      </h1>

      <h1 className="flex items-center justify-between w-full max-w-full pt-[10px]">
        <span className="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]">Мощность</span>
        <img   loading="lazy"  src="/img/Vector 8.png" alt="Line" className="pt-[15px] px-2 w-[112px] 2xl:w-[210px]" />
        <span className="whitespace-nowrap text-[20px] font-semibold">{product.mouy} л.с.</span>
      </h1>

      <h1 className="flex items-center justify-between w-full max-w-full pt-[10px]">
        <span className="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]">Коробка</span>
        <img   loading="lazy"   src="/img/Vector 8.png" alt="Line" className="pt-[15px] px-2 w-[113px] 2xl:w-[210px]" />
        <span className="whitespace-nowrap text-[20px] font-semibold">{product.cor}</span>
      </h1>

      <div className="flex justify-between pt-[24px]">
        <h1 className="2xl:text-[16px] text-[13px] font-normal">
          Цена на вторичном <p>рынке в РФ</p>
        </h1>
        <h1 className="2xl:text-[24px] text-[18px] font-normal">
          {product.print}<span className="pl-[10px]">₽</span>
        </h1>
      </div>

      <div className="flex justify-between pt-[16px]">
        <h1 className="2xl:text-[16px] text-[13px] font-normal">
          Цена автомобиля <p>“под ключ”</p>
        </h1>
        <h1 className="2xl:text-[24px] text-[18px] text-[rgb(250,0,44)] font-black">
          {product.printavt}<span className="pl-[10px]">₽</span>
        </h1>
      </div>

      <button
        onClick={() => {
          const section = document.getElementById("zauvs");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}
        className="2xl:w-[350px] w-[250px] h-[50px] 2xl:h-[56px] bg-[rgb(245,14,48)] text-white hover:text-black hover:bg-[rgb(221,221,224)] mt-[24px] rounded-[8px]"
      >
        <h1 className="text-[clamp(20px,4vw,20px)] font-bold">Оставить заявку</h1>
      </button>
    </motion.div>
  ))}
</div>
            </SwiperSlide>
          ))}
    </Swiper>
   
      </div>)}
      

    
    <div>
      {products?.length > 0 && (
        <div className="show-between-700-800">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            mousewheel={false}
            allowTouchMove={true}
           
            cssMode
            spaceBetween={20}
            autoplay={{
              delay: 9000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            style={{ width: "100%", height: "100%" }}
          >
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center gap-[20px] p-[20px]">
                      {Array.from({ length: 2 }).map((_, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-[10px] p-[24px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] w-[311px] h-[630px]"
                        >
                          <Skeleton height={150} className="rounded-[12px]" />
                          <Skeleton height={24} className="mt-[24px]" />
                          <Skeleton height={20} className="mt-[10px]" />
                          <Skeleton height={20} className="mt-[10px]" />
                          <Skeleton height={20} className="mt-[10px]" />
                          <Skeleton height={40} className="mt-[20px]" />
                          <Skeleton height={40} className="mt-[10px]" />
                          <Skeleton height={50} className="mt-[10px]" />
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))
              : groupIntoChunks(products, 2).map((productGroup, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center h-[709px] mt-[40px] gap-[20px] p-[20px]">
                      {productGroup.map((product) => (
                        <div
                          key={product._id}
                          className="bg-white rounded-[10px] p-[24px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] w-[311px] h-[630px] text-left"
                        >
                          <img   loading="lazy"
                            src={`  https://fourfeef.onrender.com/avto${product.img}`}
                            alt={product.name}
                            className="w-[263px] h-[186px] rounded-[12px] object-cover"
                            
                          />
                          <h1 className="text-[18px] 2xl:text-[24px] font-bold pt-[24px]">
                            {product.marc}
                          </h1>

                          <h1 className="flex items-center justify-between w-full max-w-full pt-[10px]">
                            <span className="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]">
                              Пробег
                            </span>
                            <img   loading="lazy"
                              src="/img/Vector 8.png"
                              alt="Line"
                              
                              className="pt-[15px] w-[117px] 2xl:w-[220px] px-2"
                            />
                            <span className="whitespace-nowrap text-[20px] font-semibold">
                              {product.probeg} км
                            </span>
                          </h1>

                          <h1 className="flex items-center justify-between w-full max-w-full pt-[10px]">
                            <span className="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]">
                              Объем двигателя
                            </span>
                            <img   loading="lazy"
                              src="/img/Vector 8.png"
                              alt="Line"
                              
                              className="pt-[15px] px-2 w-[100px] 2xl:w-[200px]"
                            />
                            <span className="whitespace-nowrap text-[20px] font-semibold">
                              {product.dviga}
                            </span>
                          </h1>

                          <h1 className="flex items-center justify-between w-full max-w-full pt-[10px]">
                            <span className="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]">
                              Мощность
                            </span>
                            <img   loading="lazy"
                              src="/img/Vector 8.png"
                              alt="Line"
                              
                              className="pt-[15px] px-2 w-[112px] 2xl:w-[210px]"
                            />
                            <span className="whitespace-nowrap text-[20px] font-semibold">
                              {product.mouy} л.с.
                            </span>
                          </h1>

                          <h1 className="flex items-center justify-between w-full max-w-full pt-[10px]">
                            <span className="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]">
                              Коробка
                            </span>
                            <img   loading="lazy"
                              src="/img/Vector 8.png"
                              alt="Line"
                              className="pt-[15px] px-2 w-[113px] 2xl:w-[210px]"
                            />
                            <span className="whitespace-nowrap text-[20px] font-semibold">
                              {product.cor}
                            </span>
                          </h1>

                          <div className="flex justify-between pt-[24px]">
                            <h1 className="2xl:text-[16px] text-[13px] font-normal">
                              Цена на вторичном <p>рынке в РФ</p>
                            </h1>
                            <h1 className="2xl:text-[24px] text-[18px] font-normal">
                              {product.print}
                              <span className="pl-[10px]">₽</span>
                            </h1>
                          </div>

                          <div className="flex justify-between pt-[16px]">
                            <h1 className="2xl:text-[16px] text-[13px] font-normal">
                              Цена автомобиля <p>“под ключ”</p>
                            </h1>
                            <h1 className="2xl:text-[24px] text-[18px] text-[rgb(250,0,44)] font-black">
                              {product.printavt}
                              <span className="pl-[10px]">₽</span>
                            </h1>
                          </div>

                          <button
                            onClick={() => {
                              const section = document.getElementById("zauvs");
                              if (section)
                                section.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="2xl:w-[350px] w-[250px] h-[50px] 2xl:h-[56px] bg-[rgb(245,14,48)] text-white hover:text-black hover:bg-[rgb(221,221,224)] mt-[24px] rounded-[8px]"
                          >
                            <h1 className="text-[clamp(20px,4vw,20px)] font-bold">
                              Оставить заявку
                            </h1>
                          </button>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      )}
    </div>
    
    
    <div>
      {products?.length > 0 && (
        <div className="flex min-[699px]:hidden ml-[16px]">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel ,]}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            mousewheel={false}
            cssMode={false}
            slidesPerView={1.15}
            spaceBetween={10}
           
            allowTouchMove={true}
            centeredSlides={false}
            style={{ width: "100%", height: "100%" }}
             breakpoints={{

  480: {
    slidesPerView: 1.6,   
    spaceBetween: 0,
    centeredSlides: true,
  },
  640: {
    slidesPerView: 2,     
    spaceBetween: 20,
    centeredSlides: false,
  },
    
        
      }}
    
    
            
          >
            {groupIntoChunks(products, 1).map((productGroup, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center mt-[32px]  h-[720px] overflow-hidden">
                  {productGroup.map((product) => (
                    <div
                      key={product._id}
                      className="bg-white rounded-[19px]  shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] px-[26px] pt-[20px]  w-[311px] h-[675px] text-left"
                    >
                      <img   loading="lazy"
                        src={`  https://fourfeef.onrender.com/avto${product.img}`}
                        alt={product.name}
                        className="rounded-[12px] w-[281px] h-[209px]"
                      />
                      <h1 className="text-[24px] font-bold pt-[16px]">
                        {product.marc}
                      </h1>
    
                      <h1 className="flex items-center  justify-between w-full pt-[8px]">
                        <span className="whitespace-nowrap text-[16px] text-[rgb(163,164,165)]">
                          Пробег
                        </span>
                        <img   loading="lazy"
                          src="/img/Vector 8.png"
                          alt="Line"
                          className="pt-[15px] w-[115px] 2xl:w-[220px] px-2"
                        />
                        <span className="whitespace-nowrap text-[20px] font-semibold">
                          {product.probeg} км
                        </span>
                      </h1>
    
                      <h1 className="flex items-center  justify-between w-full pt-[8px]">
                        <span className="whitespace-nowrap text-[16px] text-[rgb(163,164,165)]">
                          Объем двигателя
                        </span>
                        <img   loading="lazy"
                          src="/img/Vector 8.png"
                          alt="Line"
                          className="pt-[15px] px-2 w-[90px] 2xl:w-[200px]"
                        />
                        <span className="whitespace-nowrap text-[20px] font-semibold">
                          {product.dviga}
                        </span>
                      </h1>
    
                      <h1 className="flex items-center  justify-between w-full pt-[8px]">
                        <span className="whitespace-nowrap text-[16px] text-[rgb(163,164,165)]">
                          Мощность
                        </span>
                        <img   loading="lazy"
                          src="/img/Vector 8.png"
                          alt="Line"
                          className="pt-[15px] px-2 w-[100px] 2xl:w-[210px]"
                        />
                        <span className="whitespace-nowrap text-[20px] font-semibold">
                          {product.mouy} л.с.
                        </span>
                      </h1>
    
                      <h1 className="flex items-center justify-between w-full pt-[8px]">
                        <span className="whitespace-nowrap text-[16px] text-[rgb(163,164,165)]">
                          Коробка
                        </span>
                        <img   loading="lazy"
                          src="/img/Vector 8.png"
                          alt="Line"
                          className="pt-[15px] px-2 w-[110px] 2xl:w-[210px]"
                        />
                        <span className="whitespace-nowrap text-[20px] font-semibold">
                          {product.cor}
                        </span>
                      </h1>
    
                      <div className="flex justify-between pt-[6px]">
                        <h1 className="2xl:text-[16px] text-[14px]">
                          Цена <br/> на вторичном<br/> 
                          рынке в РФ
                        </h1>
                        <h1 className="2xl:text-[24px] text-[21px] font-normal pt-[18px] ">
                          {product.print}
                          <span className="pl-[6px]">₽</span>
                        </h1>
                      </div>
    
                      <div className="flex justify-between pt-[10px]">
                        <h1 className="2xl:text-[16px] text-[14px] text-left">
                          Цена <br/>автомобиля<br/>
                          “под ключ”
                        </h1>
                        <h1 className="2xl:text-[24px] text-[21px] text-[rgb(250,0,44)]  pt-[18px] font-black">
                          {product.printavt}
                          <span className="pl-[6px]">₽</span>
                        </h1>
                      </div>
                      <a >
                        
                        <button   onClick={() => {
        const section = document.getElementById("zauvs");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }} className="2xl:w-[350px]         w-[250px]      h-[50px] mt-[30px] 2xl:h-[56px] bg-[rgb(245,14,48)] text-white hover:text-black hover:bg-[rgb(221,221,224)]  rounded-[8px]">
                          <h1 className="text-[clamp(20px,4vw,20px)] font-bold">
                            Оставить заявку
                          </h1>
                        </button>
                      </a>
                      <div className="swiper-pagination" style={{ marginTop: '771px' }}></div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
    
    
    
    
    
    
    </div>
    
    </div>
    
    
    
    
    </div>
    
    
    
    
    
    
       
      
    
      
     
    
    
    </div>


  );
}


export default Avto