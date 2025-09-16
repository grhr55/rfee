import { useState ,useEffect } from "react";
import Prof from './Prof'
import 'swiper/css';
import './inex.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import Onas from "./Onas";
import Avto from "./Avto";
import Obzor from "./Obzor";
import Cart from "./Cart";
import Avtocen from "./Avtocen";
import Cash from "./Cash";
import Comanda from "./Comanda";
import Vopros from "./Vopros";
import Zauvsi from "./Zauvsi";
import Contact from "./Contact";
import { motion } from "framer-motion";


function Header( ) {


  const [products ,setproducts] = useState([])
  const [comandes ,setcomandes] = useState([])


    

const fetchProducts = async () => { 
  try {
    const res = await fetch("https://fourfeef.onrender.com/avto/darc"); 
    if (!res.ok) throw new Error("Ошибка загрузки данных"); 
    
    const data = await res.json(); 
   setproducts(data);
  } 
  catch(error) {
    console.error("Ошибка при загрузке товаров:", error); 
  } 
};

useEffect(() => { 
  fetchProducts(); 
}, []);



const fetchProduct = async () => { 
  try {
    const res = await fetch("  https://fourfeef.onrender.com/team/teamso"); 
    if (!res.ok) throw new Error("Ошибка загрузки данных"); 
    
    const data = await res.json(); 
    setcomandes(data || []);
  } 
  catch(error) {
    console.error("Ошибка при загрузке товаров:", error); 
  }
};

useEffect(() => { 
  fetchProduct(); 
}, []);



 


  return (

    <div >

      <Prof/>


  

     <section id='services'>
<motion.div
  className="bg-[rgb(244,246,248)]  w-[100%] h-[100%]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  }}
>
  
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className=" text-center text-[clamp(28px,5vw,54px)] fons-[Inter] pt-[64px] 2xl:pt-[129px]   xl:pt-[129px] lg:pt-[129px] md:pt-[129px] sm:pt-[129px] font-black  text-[rgb(0,0,0)] m-0 p-0 leading-tight px-[16px]"
  >
    Поможем вам выгодно купить и привезти <br/>автомобиль в любую точку России
  </motion.h1>

  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-center text-[clamp(17px,5vw,24px)] fons-[Inter]  m-0 p-0 leading-tight  font-normal px-[16px]  pt-[20px]"
  >
    Предлагаем Вам купить автомобиль дешевле и лучше, но за тот же бюджет
  </motion.h1>

  
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className=" hidden min-[1284px]:flex justify-center pt-[28px]"
  >
    <motion.button
      whileHover={{ scale: 1.07 }}
         onClick={() => {
        const section = document.getElementById("zauvs");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }}
      className="w-[231px] h-[64px] bg-[rgb(245,14,48)] text-[rgb(255,255,255)] hover:text-black hover:bg-[rgb(221,221,224)] rounded-[8px]"
    >
      <h1 className="text-[clamp(20px,4vw,24px)] fons-[Inter] font-bold">Оставить заявку</h1>
    </motion.button>
  </motion.div>

  
  <motion.div
    className="flex justify-center   2xl:pt-[65px] xl:pt-[65px] lg:pt-[65px] md:pt-[65px] sm:pt-[24px]  pt-[24px]    gap-[25px]  flex-wrap   pb-0  min-[1280px]:pb-[119px]   min-[1920px]:mx-[0px]  max-[500px]:mx-[16px]"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } }
    }}
  >
    {[...Array(1)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >







 <div className="flex justify-center   2xl:pt-[65px] xl:pt-[65px] lg:pt-[65px] md:pt-[65px] sm:pt-[24px]  pt-[24px]    gap-[25px]  flex-wrap   pb-0  min-[1280px]:pb-[119px]   min-[1920px]:mx-[0px]  max-[500px]:mx-[16px]    " >
      <div className="    bg-[rgb(255,255,255)] w-[334px] h-[216px] 2xl:h-[264px] xl:h-[264px]  2xl:w-[411px]  xl:w-[411px] lg:w-[411px] md:w-[411px] sm:w-[411px] rounded-[20px] font-[Inter] ">
        
        <div>


        <div className=" hidden min-[1282px]:flex "><h1 className="text-[clamp(24px,6vw,36px)] font-bold  mt-[24px] mb-[27px] ml-[32px]">С пробегом</h1></div>

        <div className=" flex min-[1282px]:hidden "><img src="/img/Image (3).png" className="w-[94px] h-[82px]  mt-[27px] ml-[20px]"></img><h1 className="text-[clamp(24px,5vw,36px)] font-bold   mt-[44px] ml-[25px]">С пробегом</h1></div>


          <h1 className="ml-[32px]  text-[clamp(16px,6vw,16px)] ">Предлагаем купить автомобиль <p>дешевле до 60%, от рыночной цены</p> на Авито и Авто.ру</h1>
        </div>
        <div className="justify-end  hidden min-[1282px]:flex ml-20px  ">
          <img src="/img/Image (3).png" className="w-[94px] h-[82px]  mr-[55px]"></img>
        </div>
      
      </div>


   
      <div className="  bg-[rgb(255,255,255)] w-[334px] h-[216px] 2xl:h-[264px] xl:h-[264px]  2xl:w-[411px]  xl:w-[411px] lg:w-[411px] md:w-[411px] sm:w-[411px] rounded-[20px] font-[Inter] ">
        
        <div>


        <div className=" hidden min-[1282px]:flex "><h1 className="text-[clamp(24px,6vw,36px)] font-bold  mt-[24px] mb-[27px] ml-[32px]">Новые</h1></div>

        <div className=" flex min-[1282px]:hidden "><img src="/img/Image (4).png" className="w-[132px] h-[72px]  mt-[27px] ml-[20px]"></img><h1 className="text-[clamp(24px,5vw,36px)] font-bold   mt-[40px] ">Новые</h1></div>


          <h1 className="ml-[32px]  text-[clamp(16px,6vw,16px)] ">Предлагаем Вам купить автомобиль <p>дешевле до 60%, от рыночной  </p> ценына Авито и Авто.ру</h1>
        </div>
        <div className="justify-end  hidden min-[1282px]:flex ml-20px  ">
          <img src="/img/Image (4).png" className="w-[128px] h-[74px]  2xl:w-[198px] 2xl:h-[96px]  xl:w-[198px]  xl:h-[96px]  lg:w-[198px]   lg:h-[96px]     md: sm:  mr-[12px]"></img>
        </div>
      
      </div>



      <div className="  bg-[rgb(255,255,255)] w-[334px] h-[216px] 2xl:h-[264px] xl:h-[264px]  2xl:w-[411px]  xl:w-[411px] lg:w-[411px] md:w-[411px] sm:w-[411px] rounded-[20px] font-[Inter] ">
        
        <div>


        <div className=" hidden min-[1282px]:flex "><h1 className="text-[clamp(24px,6vw,36px)] font-bold  mt-[24px] mb-[27px] ml-[32px]">Под ваш бюджет</h1></div>

        <div className=" flex min-[1282px]:hidden "><img src="/img/Image (5).png" className="w-[132px] h-[85px]  md:h-[122px] mt-[7px] ml-[20px]"></img><h1 className="text-[clamp(24px,5vw,36px)] font-bold   mt-[12px] ">Под ваш <p>бюджет</p></h1></div>


          <h1 className="ml-[32px]  text-[clamp(16px,6vw,16px)] ">Предлагаем Вам купить автомобиль  <p>дешевле до 60%, от рыночной </p> ценына Авито и Авто.ру</h1>
        </div>
        <div className="justify-end  hidden min-[1282px]:flex ml-20px  ">
          <img src="/img/Image (5).png" className="w-[132px] h-[85px]  2xl:w-[198px] 2xl:h-[85px]  xl:w-[223px]  xl:h-[85px]  lg:w-[126px]   lg:h-[106px]     md: sm:  mr-[12px]"></img>
        </div>
      
      </div>

 </div>
      </motion.div>
    ))}
  </motion.div>

  
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className=" flex min-[1281px]:hidden justify-center pt-[28px]"
  >
    <motion.button
      whileHover={{ scale: 1.03 }}
      onClick={() => {
        const section = document.getElementById("zauvs");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }}
      className="w-[331px] h-[56px] mb-[60px] bg-[rgb(245,14,48)] text-[rgb(255,255,255)] hover:text-black hover:bg-[rgb(221,221,224)] rounded-[8px]"
    >
      <h1 className="text-[clamp(20px,4vw,24px)] fons-[Inter] font-bold">Оставить заявку</h1>
    </motion.button>
  </motion.div>
</motion.div>
     </section>



    <Onas/>
 
   
      
    <Avto products={products}/>


    <div className="w-[100%] h-[70%] bg-[rgb(255,255,255)]">
  <div className="flex justify-center gap-[30px] flex-wrap 2xl:pb-[100px] xl:pb-[100px] lg:pb-[100px] md:pb-[100px] sm:pb-[64px] pb-[64px] 2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[100px] sm:pt-[64px] pt-[64px]">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className=""
    >
      <div className="flex min-[1189px]:hidden">
        <img src="/img/rgr.png" className="px-4" />
      </div>

      <div className="hidden min-[670px]:flex">
        <h1 className="text-[44px] font-bold 2xl:pl-0 xl:pl-4 lg:pl-4 md:pl-4 sm:pl-4 2xl:pt-0 xl:pt-5 lg:pt-5 md:pt-5 sm:pt-5 m-0 p-0 leading-tight">
          Мы советуем подбирать <p>автомобиль с бюджетом </p>от <span className="text-[rgb(245,14,48)]">1,3 млн</span>
        </h1>
      </div>

      <div className="flex min-[670px]:hidden">
        <h1 className="2xl:text-[44px] text-[clamp(28px,7vw,38px)] font-bold m-0 p-0 pl-4 pt-5 leading-tight">
          Мы советуем <p>подбирать автомобиль </p>с бюджетом от <span className="text-[rgb(245,14,48)]">1,3 млн</span>
        </h1>
      </div>

      <div className="mt-[20px] flex min-[400px]:hidden">
        <p className="text-[rgba(0,0,0,0.8)] 2xl:pl-0 xl:pl-4 lg:pl-4 pl-4 md:pl-4 pt-[20px] text-[clamp(16px,6vw,20px)] font-normal m-0 p-0 leading-tight">
          c учетом расходов на доставку, растаможку и наши услуги.
        </p>
      </div>

      <div className="mt-[20px] hidden min-[400px]:flex">
        <h1 className="text-[rgba(0,0,0,0.8)] 2xl:pl-0 xl:pl-4 lg:pl-4 md:pl-4 pl-4 pt-[20px] text-[clamp(16px,6vw,20px)] font-normal m-0 p-0 leading-tight">
          c учетом расходов на доставку, растаможку <p>и наши услуги.</p>
        </h1>
      </div>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mx-2 flex justify-start max-[500px]:justify-center"
      >
        <button
          onClick={() => {
            const section = document.getElementById("zauvs");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="2xl:w-[240px] xl:w-[250px] lg:w-[250px] md:w-[250px] sm:w-[250px] w-[331px] h-[50px] mt-[32px] 2xl:h-[56px] bg-[rgb(245,14,48)] text-white hover:text-black hover:bg-[rgb(221,221,224)] rounded-[8px]"
        >
          <h1 className="text-[clamp(20px,4vw,20px)] font-bold">Оставить заявку</h1>
        </button>
      </motion.a>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="hidden min-[1189px]:flex"
    >
      <img src="/img/rgr.png" />
    </motion.div>

  </div>
</div>




<Obzor products={products} />

<Cart/>

<section id="advantages" >


  <div className="bg-[url('/img/Image%20(9).png')] bg-cover bg-center bg-no-repeat w-full 2xl:h-[180vh] h-[100%]">


<div>
  <h1 className=" max-[1920px]:text-left  min-[400px]:text-center max-[1920px]:pt-[60px]  min-[400px]:pt-[60px]   max-[1920px]:ml-[25px]   min-[400px]:ml-[0px] pb-[44px]   text-[clamp(28px,3vw,44px)] font-extrabold ">Наши гарантии</h1>


  <div className=" flex justify-center max-[1920px]:gap-[12px] min-[639px]:gap-6 flex-wrap"> <div className="bg-[rgb(255,255,255)] 2xl:w-[411px] xl:w-[411px] lg:w-[411px] md:w-[411px] sm:w-[411px] w-[343px] 2xl:h-[160px] xl:h-[160px] lg:h-[160px] md:h-[160px] sm:h-[160px] h-[100px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] rounded-[20px] 2xl:mt-[44px] xl:mt-[44px] lg:mt-[44px] md:mt-[44px] mt-[42px] max-[1920px]:mx-4 min-[800px]:mx-0 "> <div className="max-[1920px]:pt-[30px] min-[640px]:pt-[44px] 2xl:pt-[44px] xl:pt-[44px] lg:pt-[44px] md:pt-[44px] justify-center flex"> <img src="/img/free-icon-prepayment-2262547.png" className="w-[40px] 2xl:w-[60px] xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] h-[40px] 2xl:h-[60px] xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] mr-[20px]"></img> <div className=" hidden min-[640px]:flex"> <h1 className="text-[24px] mr-[100px] font-semibold "> 100% возврат <br /> предоплаты </h1> </div> <div className="flex min-[640px]:hidden"> <h1 className="text-[clamp(16px,3vw,24px)] pt-[10px] pr-[20px] font-semibold ">100% возврат предоплаты </h1> </div> </div> </div> <div className="bg-[rgb(255,255,255)] 2xl:w-[411px] xl:w-[411px] lg:w-[411px] md:w-[411px] sm:w-[411px] w-[343px] 2xl:h-[160px] xl:h-[160px] lg:h-[160px] md:h-[160px] sm:h-[160px] h-[100px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] rounded-[20px] 2xl:mt-[44px] xl:mt-[44px] lg:mt-[44px] max-[1920px]:mt-[0px] min-[846px]:mt-[44px] max-[1920px]:mx-4 min-[800px]:mx-0 "> <div className=" max-[1920px]:pt-[30px] min-[640px]:pt-[45px] 2xl:pt-[44px] xl:pt-[44px] lg:pt-[44px] md:pt-[44px] justify-center flex"> <img src="/img/free-icon-contract-903510.png" className="w-[40px] 2xl:w-[60px] xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] h-[40px] 2xl:h-[60px] xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] mr-[20px]"></img> <div className=" hidden min-[640px]:flex"> <h1 className="text-[24px] mr-[120px] font-semibold ">Работам <br /> по договору </h1> </div> <div className="flex min-[640px]:hidden"> <h1 className="text-[clamp(16px,3vw,24px)] pt-[8px] pr-[60px] font-semibold ">Работам по договору </h1> </div> </div> </div> <div className="bg-[rgb(255,255,255)] 2xl:w-[411px] xl:w-[411px] lg:w-[411px] md:w-[411px] sm:w-[411px] w-[343px] 2xl:h-[160px] xl:h-[160px] lg:h-[160px] md:h-[160px] sm:h-[160px] h-[100px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] rounded-[20px] 2xl:mt-[44px] max-[1920px]:mt-[0px] min-[1280px]:mt-[44px] max-[1920px]:mx-4 min-[800px]:mx-0 "> <div className="max-[1920px]:pt-[30px] min-[640px]:pt-[44px] 2xl:pt-[44px] xl:pt-[44px] lg:pt-[44px] md:pt-[44px] justify-center flex"> <img src="/img/free-icon-search-file-7183387.png" className="w-[40px] 2xl:w-[60px] xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] h-[40px] 2xl:h-[60px] xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] mr-[20px]"></img> <div className=" hidden min-[640px]:flex"> <h1 className="text-[24px] mr-[85px] font-semibold ">Договор без <br /> мелкого шрифта </h1> </div> <div className="flex min-[640px]:hidden"> <h1 className="text-[clamp(16px,3vw,24px)] pt-[6px] font-semibold ">Договор без мелкого шрифта</h1> </div> </div> </div> </div>
  <div className=" flex justify-center max-[1920px]:gap-[12px] min-[640px]:gap-6 flex-wrap"> <div className="bg-[rgb(255,255,255)] 2xl:w-[411px] xl:w-[411px] lg:w-[411px] md:w-[411px] sm:w-[411px] w-[343px] 2xl:h-[160px] xl:h-[160px] lg:h-[160px] md:h-[160px] sm:h-[160px] h-[100px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] rounded-[20px] 2xl:mt-[24px] xl:mt-[24px] lg:mt-[24px] max-[1920px]:mt-[12px] min-[640px]:mt-[24px] max-[1920px]:mx-4 min-[845px]:mx-0 "> <div className="max-[1920px]:pt-[3px] min-[640px]:pt-[25px] max-[1920px]:pr-[50px] min-[639px]:pr-[0px] 2xl:pt-[24px] xl:pt-[24px] lg:pt-[24px] md:pt-[24px] justify-center flex"> <img src="/img/040---Card-Payment.png" className="w-[40px] 2xl:w-[60px] xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] h-[40px] 2xl:h-[60px] xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] mr-[20px] mt-[30px] max-[1920px]:ml-[0px] min-[639px]:ml-[30px] "></img> <div className=" hidden min-[640px]:flex"> <h1 className="text-[24px] mr-[69px] font-semibold ">Оплата в касу <br /> нашего автосалона<br /> или на р/с компании </h1> </div> <div className="flex min-[640px]:hidden"> <h1 className="text-[clamp(16px,3vw,24px)] pt-[6px] font-semibold ">Оплата в кассу нашего<br /> автосалона или на р/с<br /> компании</h1> </div> </div> </div> <div className="bg-[rgb(255,255,255)] 2xl:w-[411px] xl:w-[411px] lg:w-[411px] md:w-[411px] sm:w-[411px] w-[343px] 2xl:h-[160px] xl:h-[160px] lg:h-[160px] md:h-[160px] sm:h-[160px] h-[100px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] rounded-[20px] 2xl:mt-[24px] max-[1920px]:mt-[0px] min-[845px]:mt-[24px] max-[1920px]:mx-4 min-[800px]:mx-0 "> <div className="max-[1920px]:pt-[29px] min-[640px]:pt-[44px] 2xl:pt-[44px] xl:pt-[44px] lg:pt-[44px] md:pt-[44px] justify-center flex"> <img src="/img/free-icon-clean-car-3802500.png" className="w-[40px] 2xl:w-[60px] xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] h-[40px] 2xl:h-[60px] xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] mr-[20px]"></img> <div className=" hidden min-[640px]:flex"> <h1 className="text-[24px] mr-[130px] font-semibold ">Качество<br /> автомобиля </h1> </div> <div className="flex min-[640px]:hidden"> <h1 className="text-[clamp(16px,3vw,24px)] pt-[11px] pr-[50px] font-semibold "> Качество автомобиля</h1> </div> </div> </div> <div className="bg-[rgb(255,255,255)] 2xl:w-[411px] xl:w-[411px] lg:w-[411px] md:w-[411px] sm:w-[411px] w-[343px] 2xl:h-[160px] xl:h-[160px] lg:h-[160px] md:h-[160px] sm:h-[160px] h-[100px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)] rounded-[20px] 2xl:mt-[24px] max-[1920px]:mt-[0px] min-[1281px]:mt-[24px] max-[1920px]:mx-4 min-[845px]:mx-0 "> <div className="max-[1920px]:pt-[5px] min-[640px]:pt-[24px] max-[1920px]:pr-[14px] min-[639px]:pr-[0px] 2xl:pt-[24px] xl:pt-[24px] lg:pt-[24px] md:pt-[24px] justify-center flex"> <img src="/img/free-icon-shield-1342044.png" className="w-[40px] 2xl:w-[60px] xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] h-[40px] 2xl:h-[60px] xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] ml-[20px] mr-[20px] mt-[25px] max-[1920px]:ml-[0px] min-[639px]:ml-[20px]"></img> <div className=" hidden min-[640px]:flex"> <h1 className="text-[24px] mr-[50px] font-semibold ">На всех этапах <br /> сделки - автомобили<br /> застрахованы</h1> </div> <div className="flex min-[640px]:hidden"> <h1 className="text-[clamp(16px,3vw,24px)] pt-[17px] font-semibold ">На всех этапах сделки - <br /> автомобили застрахованы</h1> </div> </div> </div> </div>






<motion.div
  className="flex justify-between flex-wrap px-[17%] max-[1920px]:px-[16px] min-[500px]:px-[17%] pt-[32px]"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <div>
    <div className="hidden min-[400px]:flex">
      <h1 className="text-[clamp(16px,4vw,24px)] font-normal">
        Вы можете убедиться в прозрачности сделки скачав <br /> предварительный договор
      </h1>
    </div>

    <div className="flex min-[400px]:hidden">
      <h1 className="text-[clamp(16px,4vw,24px)] font-normal">
        Вы можете убедиться в прозрачности <br /> сделки скачав предварительный договор
      </h1>
    </div>
  </div>

  <div>
    <a href="договор.txt" download>
      <button className="flex text-[rgb(245,14,48)] text-[clamp(16px,4vw,20px)] font-medium pt-2">
        <img src="/img/download_icon_128877 1.png" className="pr-2" />Скачать пример договора
      </button>
    </a>
  </div>
</motion.div>

 <motion.div
        className="text-center max-[1920px]:text-left min-[500px]:text-center max-[1920px]:pt-[68px] min-[500px]:pt-[100px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[clamp(28px,8vw,44px)] font-extrabold pl-4">
          Преимущества авто из США
        </h1>
      </motion.div>

      <motion.div
        className="flex justify-center pt-[40px] flex-wrap gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-[737px] max-[1920px]:h-[296px] min-[500px]:h-[272px] 2xl:mx-0 xl:mx-0 mx-4 bg-[rgb(255,255,255)] adow-[0_2px_16px_0_rgba(0,0,0,0.08)] max-[1920px]:px-[28px] min-[500px]:px-11 rounded-[20px]">
          <h1 className="text-[clamp(20px,2vw,32px)] font-bold pt-[40px] pb-[20px]">Высокое качество</h1>
          <h1 className="text-[clamp(16px,2vw,20px)] text-[rgba(0,0,0,0.8)]">
            Одним из главных аргументов в пользу выбора автомобиля из <br />
            США, является то, что все местные машины обладают высоким <br />
            качеством сборкии оснащенности. А так же высоким качеством  лакокрасочного покрытия.
          </h1>
        </div>

        <div className="2xl:w-[519px] xl:w-[519px] w-[737px] max-[1920px]:h-[296px] min-[500px]:h-[272px] 2xl:mx-0 xl:mx-0 mx-4 max-[1920px]:px-[28px] min-[500px]:px-11 bg-[rgb(255,255,255)] adow-[0_2px_16px_0_rgba(0,0,0,0.08)] rounded-[20px]">
          <h1 className="text-[clamp(20px,2vw,32px)] font-bold pt-[40px] pb-[20px]">Богатая комплектация</h1>
          <h1 className="text-[clamp(16px,2vw,20px)] text-[rgba(0,0,0,0.8)]">
            Автомобили из США отличаются богатыми <br /> комплектациями, а также отменным <br />техническим состоянием всех узлов и  агрегатов.
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center pt-[24px] flex-wrap gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="2xl:w-[519px] xl:w-[519px] w-[737px] max-[1920px]:h-[296px] min-[500px]:h-[272px] 2xl:mx-0 xl:mx-0 mx-4 max-[1920px]:px-[28px] min-[500px]:px-11 bg-[rgb(255,255,255)] adow-[0_2px_16px_0_rgba(0,0,0,0.08)] rounded-[20px]">
          <h1 className="text-[clamp(20px,2vw,32px)] font-bold pt-[40px] pb-[20px]">Низкая цена</h1>
          <h1 className="text-[clamp(16px,2vw,20px)] text-[rgba(0,0,0,0.8)]">
            Стоимость поддержанного автомобиля из <br />
            США значительно дешевле автомобиля <br />
            на российском рынке даже с учетом расходов на растаможивание и доставку.
          </h1>
        </div>

        <div className="w-[737px] max-[1920px]:h-[296px] min-[500px]:h-[272px] 2xl:mx-0 xl:mx-0 mx-4 mb-[70px] max-[1920px]:px-[28px] min-[500px]:px-11 bg-[rgb(255,255,255)] adow-[0_2px_16px_0_rgba(0,0,0,0.08)] px-11 rounded-[20px]">
          <h1 className="text-[clamp(20px,2vw,32px)] font-bold pt-[40px] pb-[20px]">Отличное состояние</h1>
          <h1 className="text-[clamp(16px,2vw,20px)] text-[rgba(0,0,0,0.8)]">
            Состояние подержанных автомобилей идеальное. В США <br />
            отличные условия эксплуатации транспорта, хорошие дороги и отменный сервис.
          </h1>
        </div>
      </motion.div>
  



</div>
</div>



</section>

<Avtocen  products={products}  />
<Cash products={products} />
<Comanda products={products}   comandes={comandes} />
<Vopros/>
<Zauvsi    />
<Contact/>



    </div>
  );
}

export default Header;

