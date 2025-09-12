import { useState } from "react";
import { motion ,AnimatePresence } from "framer-motion";



function Prof() {

 const [content, setContent] = useState(true);

const factions = () => setContent(!content);
const sectionsIds = ['about', 'services', 'how-to-buy', 'advantages', 'reviews', 'contacts'];

  return (
<div>
       
<div className="flex 2xl:flex-wrap items-center justify-between 2xl:justify-center xl:justify-center lg:justify-center md:justify-center pt-10">

  
  <motion.img
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    src="/img/CarMarkLogo_300 1.png"
    className="w-[60px] h-[60px] "
    alt="Logo"
    fetchPriority="high"
  />

  <div className="relative group">
    {content && (
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.nav
          className="flex flex-wrap items-center gap-4 2xl:gap-12 lg:gap-6 xl:gap-10 2xl:pl-[110px] pl-0 text-[clamp(13px,10vw,16px)] font-[Inter]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          {['О нас', 'Услуги', 'Как купить', 'Преимущества', 'Отзывы', 'Контакты'].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, color: "rgb(245,14,48)" }}
              transition={{ duration: 0.25 }}
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById(sectionsIds[index]);
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>
    )}

    
    <AnimatePresence>
      {!content && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed overflow-y-auto top-0 right-0 h-full bg-white z-30 shadow-lg font-Plain font-bold text-black w-full md:hidden"
        >
          <div className="flex justify-center gap-9 relative">
            <motion.img
              src="/img/CarMarkLogo_300 1.png"
              className="mt-[45px] w-[48px] h-[48px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              onClick={factions}
              className="top-[52px] right-[30px] absolute text-[22px]"
            >
              X
            </motion.button>
          </div>

          <motion.div
            className="flex flex-col text-center mt-10"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
       <motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }}
  className="flex flex-col items-center mt-8"
>
  {['О нас', 'Услуги', 'Как купить', 'Преимущества', 'Отзывы', 'Контакты'].map((item, i) => {
    const sectionIds = ["about", "services", "how-to-buy", "advantages", "reviews", "contacts"];

    return (
      <motion.a
        key={i}
        href={`#${sectionIds[i]}`}
        className="text-[24px] font-medium mt-10 cursor-pointer"
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 }
        }}
        whileHover={{ scale: 1.05, color: "rgb(245,14,48)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById(sectionIds[i]);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
          factions(false); 
        }}
      >
        {item}

  
      </motion.a>
      
    );
    
  })}
    <div className=" flex gap-[8px] pt-[70px]">
      <img  alt="разное" loading="lazy" className=" w-[24px] h-[24px] mt-[2px] " src="/img/Vector.png"></img>
      <h1 className=" text-[24px] font-bold">8 927 997 12 42</h1>
    </div>
    <div className=" flex gap-[12px] pt-[24px]">
      <a href="https://t.me/Rocetk66">
        <img  alt="разное" loading="lazy" src="/img/Vector (5).png">
        </img>
      </a>
         <a href="https://www.viber.com/ru/">
        <img  alt="разное" loading="lazy" src="/img/Vector (6).png">
        </img>
      </a>
         <a href="https://youtu.be/dw23LGgWHKw?si=Yf_iZJVvqyKe6fv1">
        <img  alt="разное" loading="lazy" className="w-[30px] h-[30px]" src="/img/Group 2317.png">
        </img>
      </a>

    </div>
    <a href="https://megasport.ua/ua/static/politika-konfidentsiynosti/?srsltid=AfmBOopJ_6Edesh105n2jxi1o4IQ49Re1OZktJYPDkY9p6hhwasM6X-G" className="text-[16px] text-[rgba(0,0,0,0.5)] underline pt-[50px]">
      Политика конфиденциальности <br/>Реквизиты
    </a>
</motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>


  <motion.div
    className="flex justify-end"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.2 }}
  >
    <div className="flex items-center gap-2 lg:pl-[15px]  2xl:pl-[60px] xl:pl-[40px] pr-2 2xl:pr-[32px]">
      <motion.a
        href="https://t.me/Rocetk66"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-black hover:bg-[rgb(245,14,48)]"
      >
        
        <img   loading="lazy" src="/img/photo_2025-08-28_00-51-58-removebg-preview.png" className="w-[26px] h-[17px]" alt="icon1" />
      </motion.a>

            <motion.a
        href="https://www.viber.com/ru/"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-black hover:bg-[rgb(245,14,48)]"
      >
        <img   loading="lazy" src="/img/photo_2025-08-27_16-16-42-removebg-preview.png" className="w-[26px] h-[26px] pr-[2px] pt-[1px]" alt="icon1" />
      </motion.a>
 
           <motion.a
        href="https://youtu.be/dw23LGgWHKw?si=8GAXbsmFvfF9Lwhh"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-black hover:bg-[rgb(245,14,48)]"
      >
        <img   loading="lazy" src="/img/XMLID_823_.png" className="w-[18px] h-[14px]" alt="icon1" />
        
      </motion.a>
    </div>

    <div className="hidden md:block">
      <motion.div
        className="flex flex-col text-right text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <span>+7 (8352) 67-52-52</span>
        <span>+7 (927) 997-12-42</span>
      </motion.div>
    </div>

    {/* Бургер */}
    <motion.button
      onClick={factions}
      whileTap={{ scale: 0.95 }}
      className="relative z-10 flex md:hidden items-center mr-[20px]"
    >
      <motion.div className="space-y-1">
        <motion.span
          className="block w-6 h-0.5 bg-black"
          animate={content ? { rotate: 0, y: 0 } : { rotate: 45, y: 6 }}
          transition={{ duration: 0.25 }}
        />
        <motion.span
          className="block w-6 h-0.5 bg-black"
          animate={content ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-6 h-0.5 bg-black"
          animate={content ? { rotate: 0, y: 0 } : { rotate: -45, y: -6 }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
    </motion.button>
  </motion.div>
</div>








 <div className="flex justify-center mt-[34px] mb-[64px] 2xl:mt-[114px] xl:mt-[114px] px-0 2xl:px-0 xl:px-[200px] min-[1159px]:px-[75px] gap-[1px] flex-wrap pl-[0px] 2xl:pl-[200px]">

 
  <div>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-[clamp(32px,10vw,52px)] m-0 p-0 leading-tight text-[rgb(0,0,0)] text-center xl:text-left 2xl:text-left font-black"
    >
      Купите автомобиль <br /> дешевле на 60%*
    </motion.div>

    
    <div className="hidden min-[1537px]:flex">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4 }}
          className="text-[clamp(17px,1vw,20px)] text-[rgb(0,0,0)] font-[Inter] font-medium mt-[20px] m-0 p-0 leading-tight mb-[44px]"
        >
          Привезем автомобиль под ключ со всеми документами. <br />
          Подбор автомобиля под любой запрос БЕСПЛАТНО
        </motion.h1>

        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4 }}
          
        >
          <motion.button
          whileHover={{ scale: 1.07 }}
            onClick={() => {
              const section = document.getElementById("zauvs");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-[231px] h-[64px] bg-[rgb(245,14,48)] text-[rgb(255,255,255)] hover:text-black hover:bg-[rgb(221,221,224)] rounded-[8px]"
          >
            <h1 className="text-[clamp(20px,4vw,24px)] fons-[Inter] font-bold">
              Оставить заявку
            </h1>
          </motion.button>
        </motion.a>
      </motion.div>
    </div>
  </div>

  {/* Картинка */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    className="pl-[5px]"
  >
    <img  alt="разное" loading="lazy"
      src="/img/Image (2).png"
      fetchPriority="high"
   
      className="w-[100%]"
    />
  </motion.div>

 
  <div className="min-[1535px]:hidden">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.4 }}
        className="text-[clamp(16px,1vw,20px)] text-[rgb(0,0,0)] text-center font-[Inter] m-0 p-0 leading-tight font-medium"
      >
        Привезем автомобиль под ключ со всеми <br /> документами. Подбор
        автомобиля под <br /> любой запрос БЕСПЛАТНО
      </motion.h1>

      <motion.a
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.4 }}
        className="mx-2"
      >
        <button
          onClick={() => {
            const section = document.getElementById("zauvs");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-[331px] h-[56px] bg-[rgb(245,14,48)] text-[rgb(255,255,255)] hover:text-black hover:bg-[rgb(221,221,224)] mt-[32px] rounded-[8px]"
        >
          <h1 className="text-[clamp(20px,4vw,24px)] fons-[Inter] font-bold">
            Оставить заявку
          </h1>
        </button>
      </motion.a>
    </motion.div>
  </div>
</div>
    
    
    </div>

   
  )
}


export default Prof