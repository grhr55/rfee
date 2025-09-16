import { motion } from "framer-motion";


import { Swiper, SwiperSlide } from 'swiper/react';



import { Navigation, Pagination, Keyboard, Mousewheel ,Autoplay,  } from 'swiper/modules'

function Avtocen({products}) {

    function groupIntoChunks(array, chunkSize = 3) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}


  return (


    <div className="bg-[rgb(244,246,248)] w-[100%]  2xl:h-[1890px]   relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[clamp(32px,3vw,44px)] text-center font-extrabold pt-[100px] max-[1920px]:pt-[60px] min-[500px]:pt-[100px]">
          Сравните цены
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-[clamp(16px,4vw,24px)] text-center font-normal pt-[20px]">
          Привезенные нами автомобили значительно <br />
          дешевле рыночной цены в России
        </h1>
      </motion.div>
    
    
  {products.length > 0 && (   <div className="hidden min-[1200px]:flex">
         
      <div className="absolute top-[740px]   left-1/2 -translate-y-1/2  max-[1920px]:-translate-x-[1200%] min-[1900px]:-translate-x-[1400%] z-10 custom-prev">
      <button className="w-12 h-12 rounded-full bg-[rgb(255,0,0)] hover:text-[rgb(0,0,0)] text-white text-[21px] font-bold hover:bg-[rgb(244,246,248)]">
        ‹
      </button>
    </div>
    
    
    <div className="absolute top-[740px]   left-1/2 max-[1920px]:-translate-x-[-1100%]  min-[1900px]:-translate-x-[-1275%] -translate-y-1/2 z-10 custom-next">
      <button className="w-12 h-12 rounded-full bg-[rgb(255,0,0)]  hover:text-[rgb(5,5,5)] text-white   text-[21px]  font-bold hover:bg-[rgb(244,246,248)]">
        ›
      </button>
    </div>
    </div>)}
    
    
    
    
    
    
    
    
   {products.length > 0 && (  <div className="bg-[rgb(255,255,255)]   hidden min-[1200px]:flex max-[1920px]:w-[1100px] min-[1900px]:w-[1280px]  h-[890px] mx-auto w-fit  shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)]  mt-[30px] rounded-[12px]">
    
    
    
    
    
     <div className="flex absolute top-[320px]  2xl:max-[1920px]:px-[13%]   2xl:min-[1800px]:px-[16%]    justify-center  max-[1900px]:px-[20%] min-[1200px]:px-[20%]  xl:px-[17%]   gap-[24rem] 2xl:gap-[405px]  text-[26px] font-extrabold ">
      <h1>Наша цена</h1>
      <h1>Авито.ру</h1>
     </div>
     
    
    
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel ,Autoplay]}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          allowTouchMove={true}
          loop={false}
          keyboard={{ enabled: true }}
          mousewheel={false}
          cssMode
          spaceBetween={20}
         
          style={{ width: "100%", height: "100%" }}>
          
          {groupIntoChunks(products, 1).map((productGroup, index) => (
            <SwiperSlide key={index}>
              
              <div className="flex justify-center  flex-wrap 2xl:h-[806px]  h-[709px] gap-[30px]  2xl:pt-[50px]  p-[10px]">
                
                {productGroup.map((product) => (
                  <div
                    key={product._id}
                    
                    className="bg-white rounded-[10px] shadow-[0px_2px_34px_7px_rgba(227,81,81,0.23)] p-[24px] w-[411px] h-[652px] text-left"
                  >
                    <img   loading="lazy" className="  w-[363px] h-[271px]   2xl:w-[363px]  2xl:h-[237px] rounded-[12px]"
                      src={`  http://localhost:7000/avto${product.img}`}
                      alt={product.name}
                    />
                    <h1 className="text-[18px]   2xl:text-[24px] font-bold  pt-[24px]">{product.marc}</h1>
    
                  
     
    
    
                     <h1 className="flex items-center  justify-between w-full max-w-full  pt-[10px] ">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Пробег</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px]  w-[220px]   px-2"/> <span className="whitespace-nowrap text-[20px] font-semibold">{product.probeg}  км</span></h1>
                     <h1 className="flex items-center  justify-between w-full max-w-full pt-[10px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Объем двигателя</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] px-2    w-[200px] "/> <span className="whitespace-nowrap text-[20px] font-semibold">{product.dviga}</span></h1>
                      <h1 className="flex items-center  justify-between w-full max-w-full pt-[10px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Мощность</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] px-2  w-[210px] "/> <span className="whitespace-nowrap text-[20px] font-semibold">{product.mouy}л.с.</span></h1>
                      <h1 className="flex items-center   justify-between w-full max-w-full pt-[10px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Коробка</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] px-2    w-[210px] "/> <span className="whitespace-nowrap text-[20px] font-semibold">{product.cor}</span></h1>
    
    
                       
                     <div className="flex justify-items-center justify-between pt-[24px]">
                      <h1 className=" 2xl:text-[16px] text-[13px] font-normal">Цена на вторичном <p>рынке в РФ</p></h1>
                          <h1 className="2xl:text-[24px]   text-[18px] font-normal ">{product.print}<span className="pl-[10px]">₽</span></h1>
                     </div>
    
    
                       <div className="flex justify-items-center justify-between pt-[16px]">
                      <h1 className=" 2xl:text-[16px] text-[13px]  font-normal">Цена автомобиля <p>“под ключ”</p></h1>
                          <h1 className="2xl:text-[24px] text-[18px]  text-[rgb(250,0,44)] font-black ">{product.printavt}<span className="pl-[10px]">₽</span></h1>
                     </div>
    
    
                           
                        
                  </div>
                  
                ))}
                
                
              </div>
            <div>
              <h1 className="text-[44px] text-[rgb(192,192,192)] mx-[33px] mt-[-160px]  font-bold">VS</h1>
            </div>
              
              
    
                <div className="flex justify-center flex-wrap 2xl:h-[806px]  2xl:pt-[50px]  h-[709px] gap-[30px] p-[10px]">
                  
                {productGroup.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white rounded-[10px] box-border border border-[rgba(152,152,152,0.5)]  p-[24px] w-[305px] h-[450px] 2xl:w-[411px] 2xl:h-[450px] text-left"
                  >
                    <img   loading="lazy" className="  w-[363px] h-[240px]   2xl:w-[363px]  2xl:h-[240px] xl:h-[200px]  rounded-[12px]"
                      src={`  http://localhost:7000/avto${product.img}`}
                      alt={product.name}
                    />
                    <h1 className="text-[18px]   2xl:text-[24px] font-bold  pt-[10px]">{product.marc}</h1>
    
                  
                      <h1 className="flex items-center  justify-between w-full max-w-full pt-[10px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Мощность</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] px-2 w-[112px]  2xl:w-[210px] "/> <span className="whitespace-nowrap text-[20px] text-[rgba(0,0,0,0.66)] font-semibold">{product.mouy}л.с.</span></h1>
                      <h1 className="flex items-center   justify-between w-full max-w-full pt-[10px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Коробка</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] px-2   w-[113px] 2xl:w-[210px] "/> <span className="whitespace-nowrap text-[20px]  text-[rgba(0,0,0,0.66)] font-semibold">{product.cor}</span></h1>
    
    
    
                       <div className="flex justify-items-center justify-between pt-[6px]">
                      <h1 className=" 2xl:text-[16px] text-[13px] text-[rgb(163,164,165)] font-normal">Цена автомобиля <p>на авито</p></h1>
                          <h1 className="2xl:text-[24px] text-[18px]  text-[rgba(250,0,44,0.68)] font-black  ">{product.avoriarin}<span className="pl-[10px]">₽</span></h1>
                     </div>
    
                      
                           
                        
                  </div>
                ))}
                
              </div>
              
               <a className="mx-2 absolute 2xl:top-[760px] top-[780px]"> <button   onClick={() => {
        const section = document.getElementById("zauvs");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }} className="2xl:w-[235px] w-[250px] h-[50px]   2xl:h-[56px] bg-[rgb(245,14,48)] text-[rgb(255,255,255)] hover:text-black hover:bg-[rgb(221,221,224)] mt-[24px] rounded-[8px]"><h1 className="text-[clamp(20px,4vw,20px)] fons-[Inter] font-bold">Оставить заявку</h1></button></a>
    
            </SwiperSlide>
            
            
          ))}
            
          
        </Swiper>
       
    
                        
      
     </div>)}
    
    
    {products.length > 0 && ( <div className=" flex  min-[1200px]:hidden ">
    
    
    
    
    
    <div>
       <div className="flex absolute 2xl:top-[320px]  px-[40%]  left-0 right-0 max-[1920px]:px-[11%]   min-[1800px]:px-[16%]  flex-wrap   justify-center     2xl:gap-[405px]  min-[1920px]:gap-[310px]  lg:max-[938px]:gap-[790px] max-[800px]:gap-[656px] lg:min-[1200px]:gap-[436px]  max-[1144px]:gap-[436px]   md:min-[1015px]:gap-[380px]    xl:top-[290px]  lg:top-[290px]  md:top-[290px] sm:top-[277px]   max-[635px]:top-[266px]  max-[470px]:top-[216px] min-[700px]:top-[280px]       2xl:bottom-[0px]  xl:bottom-[0px] lg:bottom-[890px]  md:bottom-[890px]  min-[640px]:bottom-[928px]        max-[941px]:gap-[500px]    min-[937px]:sm:gap-[314px] max-[940px]:sm:gap-[657px]   gap-[720px]  text-[clamp(20px,6vw,26px)] font-extrabold    ">
      <h1>Наша цена</h1>
      <h1  >Авито.ру</h1>
     </div>
    </div>
     
    
    
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel ,Autoplay]}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{ clickable: true }}
          allowTouchMove={true}
          loop={false}
          keyboard={{ enabled: true }}
          mousewheel={false}
          cssMode
          spaceBetween={20}
          
          style={{ width: "100%", height: "100%" }}>
          
          {groupIntoChunks(products, 1).map((productGroup, index) => (
            <SwiperSlide key={index}>
              
              <div className=" flex justify-center flex-wrap   2xl:mt-[0px]  xl:mt-[0px] lg:mt-[50px]  mt-[32px]   md:max-[940px]:mt-[50px] min-[940px]:mt-[50px]    md:max-[940px]:top-[283px] min-[940px]:top-[283px] top-[283px]    pr-[16px]   pl-[16px]    min-[1200px]:pl-[65px]  min-[1200px]:pr-[65px]     h-[1364px] min-[941px]:h-[777px]    gap-[0px]  sm:min-[828px]:gap-[20px] max-[800px]:gap-[13px]   ">
                <div className="2xl:h-[806px]     h-[300px] gap-[30px]  mt-[50px] ml-[48px] max-[700px]:ml-[0px]  mr-[45px] max-[700px]:mr-[0px]">
                
                {productGroup.map((product) => (
                  <div
                    key={product._id}
                    
                    className=" bg-white rounded-[10px] shadow-[0px_2px_34px_7px_rgba(227,81,81,0.23)] p-[24px] xl:w-[397px] lg:w-[397px] md:w-[397px]   h-[602px] 2xl:w-[411px] 2xl:h-[652px] text-left"
                  >
                    <img   loading="lazy" className="  w-[375px] h-[240px]   2xl:w-[363px]  object-cover  2xl:h-[240px] rounded-[12px]"
                      src={`  http://localhost:7000/avto${product.img}`}
                      alt={product.name}
                    />
                    <h1 className="text-[18px]   2xl:text-[24px] font-bold  pt-[24px]">{product.marc}</h1>
    
                  
     
    
    
                     <h1 className="flex items-center  justify-between w-full max-w-full pt-[5px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Пробег</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] min-[1920px]:w-[205px]  max-[450px]:w-[43%]  w-[55%]   px-2"/> <span className="whitespace-nowrap text-[20px] font-semibold">{product.probeg}  км</span></h1>
                     <h1 className="flex items-center  justify-between w-full max-w-full pt-[5px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Объем двигателя</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] px-2  min-[1920px]:w-[191px]  max-[450px]:w-[40%]  w-[54%] "/> <span className="whitespace-nowrap text-[20px] font-semibold">{product.dviga}</span></h1>
                     <h1 className="flex items-center  justify-between w-full max-w-full pt-[5px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Мощность</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] px-2  min-[1920px]:w-[200px]  max-[450px]:w-[43%]  w-[53%] "/> <span className="whitespace-nowrap text-[20px] font-semibold">{product.mouy}л.с.</span></h1>
                     <h1 className="flex items-center  justify-between w-full max-w-full pt-[5px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Коробка</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] px-2   min-[1920px]:w-[189px]  max-[450px]:w-[40%]  w-[57%] "/> <span className="whitespace-nowrap text-[20px] font-semibold">{product.cor}</span></h1>
    
    
                       
                     <div className="flex justify-items-center justify-between pt-[24px]">
                      <h1 className=" 2xl:text-[16px] text-[13px] font-normal">Цена на вторичном <p>рынке в РФ</p></h1>
                          <h1 className="2xl:text-[24px]   text-[18px] font-normal ">{product.print}<span className="pl-[10px]">₽</span></h1>
                     </div>
    
    
                       <div className="flex justify-items-center justify-between pt-[16px]">
                      <h1 className=" 2xl:text-[16px] text-[13px]  font-normal">Цена автомобиля <p>“под ключ”</p></h1>
                          <h1 className="2xl:text-[24px] text-[18px]  text-[rgb(250,0,44)] font-black ">{product.printavt}<span className="pl-[10px]">₽</span></h1>
                     </div>
    
    
                           
                        
                  </div>
                  
                ))}
                
                
              </div>
              
    
    
                <div className="2xl:h-[806px]   h-[449px] gap-[30px] mt-[200px] min-[938px]:mt-[50px]  ">
                
                {productGroup.map((product) => (
                  <div
                    key={product._id}
                    
                    className="bg-white rounded-[20px] box-border border border-[rgba(152,152,152,0.5)] p-[24px] xl:w-[397px] lg:w-[397px] md:w-[397px]   h-[463px] 2xl:w-[411px] 2xl:h-[652px] text-left"
                  >
                    <img   loading="lazy" className="  w-[363px] h-[235px]   2xl:w-[363px]  2xl:h-[237px] rounded-[12px]"
                      src={`  http://localhost:7000/avto${product.img}`}
                      alt={product.name}
                    />
                    <h1 className="text-[18px]   2xl:text-[24px] font-bold  pt-[24px]">{product.marc}</h1>
    
                  
     
                      <h1 className="flex items-center  justify-between w-full max-w-full pt-[10px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Мощность</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] px-2  min-[1920px]:w-[200px]  max-[450px]:w-[44%]   w-[56%] "/> <span className="whitespace-nowrap text-[20px] text-[rgba(0,0,0,0.66)] font-semibold">{product.mouy}л.с.</span></h1>
                      <h1 className="flex items-center   justify-between w-full max-w-full pt-[10px]">  <span className ="whitespace-nowrap text-[16px] font-normal text-[rgb(163,164,165)]" >Коробка</span><img   loading="lazy" src="/img/Vector 8.png" alt="Line"  className="pt-[15px] px-2    min-[1920px]:w-[189px]  max-[450px]:w-[40%]  w-[55%] "/> <span className="whitespace-nowrap text-[20px]  text-[rgba(0,0,0,0.66)] font-semibold">{product.cor}</span></h1>
    
    
                       
                    
    
    
                       <div className="flex justify-items-center justify-between pt-[16px]">
                      <h1 className=" 2xl:text-[16px] text-[13px]  font-normal">Цена автомобиля <p>на авто</p></h1>
                          <h1 className="2xl:text-[24px] text-[18px]  text-[rgba(250,0,44,0.68)] font-black ">{product.avoriarin}<span className="pl-[10px]">₽</span></h1>
                     </div>
    
    
                           
                        
                  </div>
                  
                ))}
                
                
              </div>
         
              
              
    
            
              
               <a className="mx-2 absolute 2xl:top-[760px] xl:top-[700px]  lg:top-[700px] md:min-[941px]:top-[700px]  max-[941px]:top-[1250px]    top-[1200px] "> <button   onClick={() => {
        const section = document.getElementById("zauvs");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }} className="2xl:w-[235px] w-[250px] h-[50px]   2xl:h-[56px] bg-[rgb(245,14,48)] text-[rgb(255,255,255)] hover:text-black hover:bg-[rgb(221,221,224)] mt-[24px] rounded-[8px]"><h1 className="text-[clamp(20px,4vw,20px)] fons-[Inter] font-bold">Оставить заявку</h1></button></a>
    
              </div>
              
            </SwiperSlide>
            
            
          ))}
            
          
        </Swiper>
       
    
                        
      
     </div>)}
    
    
    
    
    
    
    
    
    
    
    
    
    <motion.div
      className="flex justify-center gap-[24px] flex-wrap 2xl:px-0 xl:px-0 px-[16px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="bg-[rgb(255,255,255)] min-[1900px]:w-[628px] max-[1920px]:w-[540px] 2xl:h-[516px] xl:h-[516px]  lg:h-[516px] md:h-[470px]  max-[768px]:h-[420px]  min-[500px]:h-[470px] min-[1100px]:w-[541px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)] mt-[88px] rounded-[20px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="max-[1920px]:pl-[36px] min-[500px]:pl-[60px] max-[1920px]:pt-[35px] min-[500px]:pt-[52px]">
          <h1 className="text-[clamp(28px,4vw,44px)] font-bold m-0 p-0 leading-tight">
            Оснащение <br /> автомобиля в США
          </h1>
          <h1 className="pt-[16px] text-[clamp(16px,4vw,24px)] font-normal text-[rgba(0,0,0,0.8)]">
            Производители обязаны оснащать <br /> автомобили базовыми системам <br />безопасности:
          </h1>
          <div className="flex justify-items-center gap-[16px] pt-[26px]">
            <img  alt="разное" loading="lazy" src="/img/Group.png" className="w-[36px] h-[33px]" />
            <h1>12 подушек безопасности</h1>
          </div>
          <div className="flex justify-items-center gap-[16px] pt-[26px]">
            <img  alt="разное" loading="lazy" src="/img/free-icon-road-1950853 (1).png" className="w-[36px] h-[29px]" />
            <h1 className="text-[clamp(18px,5vw,20px)]">Удержание в полосе</h1>
          </div>
          <div className="flex justify-items-center gap-[16px] pt-[26px]">
            <img  alt="разное" loading="lazy" src="/img/_213542088 (1).png" className="w-[36px] h-[29px]" />
            <h1 className="text-[clamp(18px,6vw,20px)]">Адаптивный круз-контроль</h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-[rgb(255,255,255)] min-[1900px]:w-[628px] max-[1920px]:w-[540px] 2xl:h-[516px] xl:h-[516px] mb-[60px] lg:h-[516px] md:h-[470px] max-[768px]:h-[420px] min-[500px]:h-[470px] min-[1100px]:w-[541px] mt-[88px] max-[1138px]:mt-[0px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)] rounded-[20px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="max-[1920px]:pl-[36px] min-[500px]:pl-[60px] max-[1920px]:pt-[35px] min-[500px]:pt-[52px]">
          <h1 className="text-[clamp(28px,7vw,44px)] m-0 p-0 leading-tight font-bold">
            Долговечные <br /> комплектующие
          </h1>
          <h1 className="pt-[10px] text-[clamp(18px,5vw,24px)] font-semibold text-[rgb(0,0,0)]">
            Срок службы авто в США
          </h1>
          <h1 className="text-[clamp(32px,5vw,48px)] pt-[10px] font-bold text-[rgb(250,0,44)]">
            480 000 км
          </h1>
          <h1 className="pt-[20px] text-[clamp(18px,5vw,24px)] font-semibold text-[rgb(0,0,0)]">
            Срок службы авто в России
          </h1>
          <h1 className="font-extrabold pt-[10px] text-[clamp(20px,5vw,24px)] text-[rgb(0,0,0)]">
            300 000 км
          </h1>
          <button
            onClick={() => {
              const section = document.getElementById("zauvs");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="2xl:w-[235px] w-[250px] h-[50px] 2xl:h-[56px] bg-[rgb(245,14,48)] text-[rgb(255,255,255)] hover:text-black hover:bg-[rgb(221,221,224)] mt-[30px] rounded-[8px]"
          >
            <h1 className="text-[clamp(20px,4vw,20px)] font-bold">Оставить заявку</h1>
          </button>
        </div>
      </motion.div>
    </motion.div>

    
    </div>

  );
}


export default Avtocen