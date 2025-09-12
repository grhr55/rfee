
import { motion } from "framer-motion";

function Onas() {


  return (

         <section id="about">
<motion.div
  className="flex-wrap 2xl:flex xl:flex lg:flex flex justify-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }}
>
 
  <motion.img
    src="/img/Container.png"
    alt="Container"
    className="w-[100%] 2xl:w-[50%] xl:w-[50%] lg:w-[50%] object-cover"
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }}
  />


  <motion.div
    className="bg-white w-[50%] pb-[50px]"
    variants={{
      
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }}
  >
    <div className="flex justify-center">
      <div className="xl:pr-[100px] md:pr-[0px] lg:pr-[0px] 2xl:min-[1920px]:pr-[29%] 2xl:max-[1900px]:pr-[10%] sm:pr-[0px] min-[375px]:mx-[0px] max-[360px]:mx-[16px]">

     
        <motion.h1
          className="text-[clamp(24px,6vw,44px)] 2xl:pt-[52px] xl:pt-[52px] lg:pt-[52px] md:pt-[52px] sm:pt-[32px] pt-[32px] font-black"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          O нас
        </motion.h1>

        <motion.h1
          className="text-[clamp(15px,2vw,24px)]"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          Мы автосалон и официальный партнер <br/>
          крупнейших мировых авто-аукционов: IAA (<br/> Insurance Auto Auction), Copart, Manheim.
        </motion.h1>

        
        {[
          { img: "/img/Text input container.png", text: "Работаем без посредников", className: "pb-[14px]" },
          { img: "/img/Text input container (1).png", text: "Успешный опыт 10 лет" ,className: "pb-[14px]" },
          { img: "/img/Text input container (2).png", text: "Отлаженная логистика" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className={`flex gap-6 pb-[14px] pt-[${idx===0?'24':'14'}px] ${idx===2?'pb-[24px]':''}`}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <div className="bg-red-600 w-[52px] h-[52px] rounded-[30px]">
              <img  alt="разное" loading="lazy" src={item.img} className="px-2 pt-[7px]" />
            </div>
            <h1 className="pt-[11px] text-[clamp(16px,4vw,20px)] font-medium">{item.text}</h1>
          </motion.div>
        ))}

        
        <motion.div
          className="box-border border-[3px] w-[319px]  h-[114px]  2xl:w-[488px] 2xl:h-[69px]  xl:w-[488px] xl:h-[69px]  lg:w-[430px] lg:h-[69px] border-[rgba(250,0,44,0.15)] rounded-[10px] mt-[14px]"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          <h1 className="pt-[9px] pl-[20px] text-[16px] font-semibold 2xl:pt-[5px] 2xl:pl-[13px]">
            Мы берем на себя полное сопровождение сделки 
            <p>до передачи автомобиля в руки клиенту.</p>
          </h1>
        </motion.div>

       
        <motion.div
          className="mt-[32px]"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              const section = document.getElementById("zauvs");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-[322px] 2xl:w-[235px] xl:w-[235px] lg:w-[235px] h-[56px] bg-[rgb(245,14,48)] text-[rgb(255,255,255)] hover:text-black hover:bg-[rgb(221,221,224)] rounded-[8px]"
          >
            <h1 className="text-[clamp(20px,4vw,20px)] fons-[Inter] font-bold">Оставить заявку</h1>
          </motion.button>
        </motion.div>

      </div>
    </div>
  </motion.div>
</motion.div>

 
    </section>


  )
}


export default Onas