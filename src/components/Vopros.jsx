
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";





function Vopros() {

  const [clik, setclik] = useState(Array(10).fill(false));



const clisk = (index) => {
  setclik(prev => {
    const newClic = [...prev]; // создаем копию массива
    newClic[index] = !newClic[index]; // переключаем нужный элемент
    return newClic;
  });
};

  return (




  <div className="bg-white 2xl:h-[1500px] h-[1560px]">
    <div className="2xl:pl-[17%]  xl:pl-[17%]  lg:pl-[17%] md:pl-[17%] sm:pl-[17%] px-[16px]      pt-[100px]">
     <h1 className="text-[clamp(28px,4vw,44px)] pb-[40px] font-semibold">Часто задаваемые вопросы</h1>
 
          <div className=" w-[98%]    2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>


 <div className="flex justify-between 2xl:pr-[20%] xl:pr-[20%] lg:pr-[20%] md:pr-[20%] sm:pr-[20%] pr-[0%] justify-items-end pl-0 2xl:pl-[50px]">
  <h1 className="text-[clamp(20px,6vw,24px)] min-[1920px]:pl-[0px] max-[500px]:pl-[10px] 2xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] pt-[20px] 2xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] pb-[20px] font-semibold">
    Какие способы оплаты у вас?
  </h1>

  <button onClick={() => clisk(0)}>
    {clik[0] ? (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">-</div>
    ) : (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">+</div>
    )}
  </button>
</div>

<AnimatePresence>
  {clik[0] && (
    <motion.div
      key="payment"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50px" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] w-[100%] text-slate-950 mt-4 overflow-hidden"
    >
      <h1 className="pl-[3.5%] text-[clamp(16px,4vw,20px)] min-[1920px]:pb-[0px] max-[500px]:pb-[20px]">
        Карта ,наличкой
      </h1>
    </motion.div>
  )}
</AnimatePresence>
      
      <div className=" w-[98%]  2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>

<div className="flex justify-between 2xl:pr-[20%] xl:pr-[20%] lg:pr-[20%] md:pr-[20%] sm:pr-[20%] pr-[0%] justify-items-end pl-0 2xl:pl-[50px]">
  <h1 className="text-[clamp(20px,6vw,24px)] min-[1920px]:pt-[40px] max-[500px]:pt-[20px] min-[1920px]:pl-[0px] max-[500px]:pl-[10px] 2xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] pb-[20px] 2xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] pt-[20px] font-semibold">
    Какие автомобили вы доставляете?
  </h1>

  <button onClick={() => clisk(1)}>
    {clik[1] ? (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">-</div>
    ) : (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">+</div>
    )}
  </button>
</div>

<AnimatePresence>
  {clik[1] && (
    <motion.div
      key="cars"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50px" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] w-[100%] text-slate-950 mt-4 overflow-hidden"
    >
      <h1 className="pl-[3.5%] text-[clamp(16px,4vw,20px)] min-[1920px]:pb-[0px] max-[500px]:pb-[20px]">
        Любого вида которая есть в США
      </h1>
    </motion.div>
  )}
</AnimatePresence>
      <div className=" w-[98%]  2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>
<div className="flex justify-between 2xl:pr-[20%] xl:pr-[20%] lg:pr-[20%] md:pr-[20%] sm:pr-[20%] pr-[0%] justify-items-end pl-0 2xl:pl-[50px]">
  <h1 className="text-[clamp(20px,6vw,24px)] min-[1920px]:pt-[40px] max-[500px]:pt-[20px] min-[1920px]:pl-[0px] max-[500px]:pl-[10px] 2xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] pb-[20px] 2xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] pt-[20px] font-semibold">
    Могу ли я купить через вас запчасти?
  </h1>

  <button onClick={() => clisk(2)}>
    {clik[2] ? (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">-</div>
    ) : (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">+</div>
    )}
  </button>
</div>

<AnimatePresence>
  {clik[2] && (
    <motion.div
      key="parts"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50px" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] w-[100%] text-slate-950 mt-4 overflow-hidden"
    >
      <h1 className="pl-[3.5%] text-[clamp(16px,4vw,20px)] min-[1920px]:pb-[0px] max-[500px]:pb-[20px]">
        Да, при покупке автомобиля с повреждениями, мы подберем для него запчасти.
      </h1>
    </motion.div>
  )}
</AnimatePresence>
      <div className=" w-[98%]  2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>
<div className="flex justify-between 2xl:pr-[20%] xl:pr-[20%] lg:pr-[20%] md:pr-[20%] sm:pr-[20%] pr-[0%] justify-items-end pl-0 2xl:pl-[50px]">
  <h1 className="text-[clamp(20px,6vw,24px)] min-[1920px]:pt-[40px] max-[500px]:pt-[20px] min-[1920px]:pl-[0px] max-[500px]:pl-[10px] 2xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] pb-[20px] 2xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] pt-[20px] font-semibold">
    Какие гарантии, что во время доставки с автомобилем ничего не произойдет?
  </h1>

  <button onClick={() => clisk(3)}>
    {clik[3] ? (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">-</div>
    ) : (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">+</div>
    )}
  </button>
</div>

<AnimatePresence>
  {clik[3] && (
    <motion.div
      key="guarantee"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50px" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] w-[100%] text-slate-950 mt-4 overflow-hidden"
    >
      <h1 className='pl-[3.5%] text-[clamp(16px,4vw,20px)] min-[1920px]:pb-[0px] max-[500px]:pb-[20px]'>
        GPS-трекер, чтобы клиент мог видеть местоположение в реальном времени
      </h1>
    </motion.div>
  )}
</AnimatePresence>
      <div className=" w-[98%]  2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>
 <div className="flex justify-between 2xl:pr-[20%] xl:pr-[20%] lg:pr-[20%] md:pr-[20%] sm:pr-[20%] pr-[0%] justify-items-end pl-0 2xl:pl-[50px]">
  <h1 className="text-[clamp(20px,6vw,24px)] min-[1920px]:pt-[40px] max-[500px]:pt-[20px] min-[1920px]:pl-[0px] max-[500px]:pl-[10px] 2xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] pb-[20px] 2xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] pt-[20px] font-semibold">
    Какие документы я получу в комплекте с автомобилем?
  </h1>

  <button onClick={() => clisk(4)}>
    {clik[4] ? (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">-</div>
    ) : (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">+</div>
    )}
  </button>
</div>

<AnimatePresence>
  {clik[4] && (
    <motion.div
      key="documents"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50px" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] w-[100%] text-slate-950 mt-4 overflow-hidden"
    >
      <h1 className='pl-[3.5%] text-[clamp(16px,4vw,20px)] min-[1920px]:pb-[0px] max-[500px]:pb-[20px]'>
        ПТС, СТС, ДКП, акт, сервиска, гарантия, инструкция, ключи.
      </h1>
    </motion.div>
  )}
</AnimatePresence>
      <div className=" w-[98%]  2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>
<div className="flex justify-between 2xl:pr-[20%] xl:pr-[20%] lg:pr-[20%] md:pr-[20%] sm:pr-[20%] pr-[0%] justify-items-end pl-0 2xl:pl-[50px]">
  <h1 className="text-[clamp(20px,6vw,24px)] min-[1920px]:pt-[40px] max-[500px]:pt-[20px] min-[1920px]:pl-[0px] max-[500px]:pl-[10px] 2xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] pb-[20px] 2xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] pt-[20px] font-semibold">
    В какие города России вы осуществляете доставку автомобиля?
  </h1>

  <button onClick={() => clisk(5)}>
    {clik[5] ? (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">-</div>
    ) : (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">+</div>
    )}
  </button>
</div>

<AnimatePresence>
  {clik[5] && (
    <motion.div
      key="delivery-cities"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50px" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] w-[100%] text-slate-950 mt-4 overflow-hidden"
    >
      <h1 className='pl-[3.5%] text-[clamp(16px,4vw,20px)] min-[1920px]:pb-[0px] max-[500px]:pb-[20px]'>
        Всех
      </h1>
    </motion.div>
  )}
</AnimatePresence>
      <div className=" w-[98%]  2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>
<div className="flex justify-between 2xl:pr-[20%] xl:pr-[20%] lg:pr-[20%] md:pr-[20%] sm:pr-[20%] pr-[0%] justify-items-end pl-0 2xl:pl-[50px]">
  <h1 className="text-[clamp(20px,6vw,24px)] min-[1920px]:pt-[40px] max-[500px]:pt-[20px] min-[1920px]:pl-[0px] max-[500px]:pl-[10px] 2xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] pb-[20px] 2xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] pt-[20px] font-semibold">
    Какие сроки доставки автомобиля?
  </h1>

  <button onClick={() => clisk(6)}>
    {clik[6] ? (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">-</div>
    ) : (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">+</div>
    )}
  </button>
</div>

<AnimatePresence>
  {clik[6] && (
    <motion.div
      key="delivery-time"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50px" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] w-[100%] text-slate-950 mt-4 overflow-hidden"
    >
      <h1 className='pl-[3.5%] text-[clamp(16px,4vw,20px)] min-[1920px]:pb-[0px] max-[500px]:pb-[20px]'>
        В среднем — 6–10 недель.
      </h1>
    </motion.div>
  )}
</AnimatePresence>
      <div className=" w-[98%]  2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>

<div className="flex justify-between 2xl:pr-[20%] xl:pr-[20%] lg:pr-[20%] md:pr-[20%] sm:pr-[20%] pr-[0%] justify-items-end pl-0 2xl:pl-[50px]">
  <h1 className="text-[clamp(20px,6vw,24px)] min-[1920px]:pt-[40px] max-[500px]:pt-[20px] min-[1920px]:pl-[0px] max-[500px]:pl-[10px] 2xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] pb-[20px] 2xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] pt-[20px] font-semibold">
    Можно ли вернуть автомобиль на аукцион после покупки?
  </h1>

  <button onClick={() => clisk(7)}>
    {clik[7] ? (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">-</div>
    ) : (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">+</div>
    )}
  </button>
</div>

<AnimatePresence>
  {clik[7] && (
    <motion.div
      key="auction-return"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50px" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] w-[100%] text-slate-950 mt-4 overflow-hidden"
    >
      <h1 className='pl-[3.5%] text-[clamp(16px,4vw,20px)] min-[1920px]:pb-[0px] max-[500px]:pb-[20px]'>
        Нет, на аукционах возврат обычно невозможен.
      </h1>
    </motion.div>
  )}
</AnimatePresence>
      <div className=" w-[98%]  2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>
       <div className="flex justify-between 2xl:pr-[20%] xl:pr-[20%] lg:pr-[20%] md:pr-[20%] sm:pr-[20%] pr-[0%] justify-items-end pl-0 2xl:pl-[50px]">
  <h1 className="text-[clamp(20px,6vw,24px)] min-[1920px]:pt-[40px] max-[500px]:pt-[20px] min-[1920px]:pl-[0px] max-[500px]:pl-[10px] 2xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] pb-[20px] 2xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] pt-[20px] font-semibold">
    Какие сроки оплаты после выигрыша на аукционе?
  </h1>

  <button onClick={() => clisk(8)}>
    {clik[8] ? (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">-</div>
    ) : (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">+</div>
    )}
  </button>
</div>

<AnimatePresence>
  {clik[8] && (
    <motion.div
      key="payment-deadline"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50px" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] w-[100%] text-slate-950 mt-4 overflow-hidden"
    >
      <h1 className='pl-[3.5%] text-[clamp(16px,4vw,20px)] min-[1920px]:pb-[0px] max-[500px]:pb-[20px]'>
        Обычно 1–2 рабочих дня.
      </h1>
    </motion.div>
  )}
</AnimatePresence>
      <div className=" w-[98%]  2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>
<div className="flex justify-between 2xl:pr-[20%] xl:pr-[20%] lg:pr-[20%] md:pr-[20%] sm:pr-[20%] pr-[0%] justify-items-end pl-0 2xl:pl-[50px]">
  <h1 className="text-[clamp(20px,6vw,24px)] min-[1920px]:pt-[40px] max-[500px]:pt-[20px] min-[1920px]:pl-[0px] max-[500px]:pl-[10px] 2xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] pb-[20px] 2xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] pt-[20px] font-semibold">
    Что если я откажусь от покупки автомобиля?
  </h1>

  <button onClick={() => clisk(9)}>
    {clik[9] ? (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">-</div>
    ) : (
      <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">+</div>
    )}
  </button>
</div>

<AnimatePresence>
  {clik[9] && (
    <motion.div
      key="refusal-fee"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50px" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] w-[100%] text-slate-950 mt-4 overflow-hidden"
    >
      <h1 className='pl-[3.5%] text-[clamp(16px,4vw,20px)] min-[1920px]:pb-[0px] max-[500px]:pb-[20px]'>
        Придётся оплатить штраф и комиссию аукциона.
      </h1>
    </motion.div>
  )}
</AnimatePresence>
      <div className=" w-[98%]  2xl:w-[80%] xl:w-[80%]   lg:w-[80%]  md:w-[80%] sm:w-[80%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>




    </div>
  </div>


  );
}


export default Vopros