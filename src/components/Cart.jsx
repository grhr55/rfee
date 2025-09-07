

import { motion } from "framer-motion";
 import { useState } from "react";

function Card() {



const [faction, setFaction] = useState(Array(3).fill(false));


    const factionClick = (index) => {
    setFaction(prev => {
    const newClic = [...prev]; 
    newClic[index] = !newClic[index]; 
    return newClic;
  });
};



  return (

    <section  id="how-to-buy">

  <div className=" bg-[#ffffff] " >
  <div className=" 2xl:pb-[100px] pb-[64px] 2xl:px-[20%] lx:px-[20%] lg:px-[20%] md:px-[20%] sm:px-[20%] px-[16px] ">
    
    <h1 className="text-[clamp(32px,9vw,44px)] font-bold  2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[100px] sm:pt-[64px] pt-[64px]  pb-3">Процесc покупки</h1>
     <div className=" w-[100%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>


<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  <div className="flex justify-between justify-items-end pl-0 2xl:pl-[50px]">
    <h1 className="text-[clamp(65px,5vw,80px)] text-[rgb(245,14,48)]  font-bold">01</h1>
    <h1 className="text-[clamp(20px,2vw,44px)]  hidden min-[400px]:flex pt-[35px]   2xl:pr-[35%] xl:pr-[35%] lg:pr-[35%] md:pr-[24%] sm:pr-[13%] font-semibold">Подбор автомобиля</h1>
    <h1 className="text-[clamp(20px,2vw,44px)]  flex min-[400px]:hidden pt-[19px] ml-[-40%] 2xl:ml-[-40%] sm:pl-[184px]   pl-[46%]   font-semibold">Предварительная консультация</h1>

    <button onClick={() => factionClick(0)}>
      {faction[0] ? (
        <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">˄</div>
      ) : (
        <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">˅</div>
      )}
    </button>
  </div>

  {faction[0] && (
    <div className="bg-[#ffffff] w-[100%] 2xl:h-[370px]  h-[100%]  text-slate-950 mt-4">
      <div className="flex justify-between flex-wrap">
        <h1 className="text-[20px]  2xl:pl-[21%] 2xl:pr-[130px] xl:pr-[130px]  lg:pr-[130px] pr-[131px]  font-semibold">Консультация</h1>
        <div className="hidden min-[470px]:flex">
          <h1 className="text-[clamp(16px,4vw,18px)] pr-[9px] font-normal">
            Индивидуальный подход и консультация от опытных<br/>специалистов по всем вопросам, связанным с выбором,  <br/>доставкой и стоимостью автомобиля и другими<br/> расходами.
          </h1>
        </div>
        <div className="flex min-[470px]:hidden">
          <h1 className="text-[clamp(16px,4vw,18px)] pr-0 pt-4 font-normal">
            Индивидуальный подход<br/> и консультация от опытныхспециалистов<br/>  по всем вопросам, связанным с выбором, <br/>доставкой и стоимостью автомобиля <br/> и другими расходами.
          </h1>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-[0.5rem] pt-[24px]">
        <h1 className="text-[20px]  2xl:pl-[21%] font-semibold">Предварительный договор</h1>
        <div className="hidden min-[400px]:flex">
          <h1 className="text-[clamp(16px,3vw,18px)] 2xl:pr-6 xl:pr-6 lg:pr-4 pr-0 font-normal">
            Подписывается предварительный договор, <br/> подбор автомобиля согласно вашим требованиям, на<br/> условиях: Депозитный платеж 1000$
            <a href="договор.txt" download>
              <br/>
              <button className="flex text-[rgb(245,14,48)] pt-2">
                <img src="/img/download_icon_128877 1.png" className="pr-2" />Скачать пример договора
              </button>
            </a>
          </h1>
        </div>

        <div className="flex min-[400px]:hidden">
          <h1 className="text-[clamp(16px,3vw,18px)] 2xl:pr-4 xl:pr-4 lg:pr-4 pr-0 font-normal">
            Подписывается предварительный договор<br/>, подбор автомобиля согласно вашим <br/> требованиям, на условиях: Депозитный <br/>платеж 1000$ 
            <a href="договор.txt" download>
              <br/>
              <button className="flex text-[rgb(245,14,48)] pt-2">
                <img src="/img/download_icon_128877 1.png" className="pr-2" />Скачать пример договора
              </button>
            </a>
          </h1>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-6 pt-[24px] pb-[20px]">
        <h1 className="text-[20px]  2xl:pl-[21%] pr-[49px] font-semibold">Подбор автомобиля</h1>
        <div className="hidden min-[450px]:flex">
          <h1 className="text-[clamp(16px,3vw,18px)] font-normal">
            Ваш персональный менеджер ведете поиск автомобиля, <br/>на площадках наших партнеров IAAI и Copart. Период<br/> поиска автомобиля в среднем занимает 2 недели
          </h1>
        </div>
        <div className="flex min-[450px]:hidden">
          <h1 className="text-[clamp(16px,3vw,18px)] 2xl:pr-4 font-normal">
            Ваш персональный менеджер ведете <br/>поиск автомобиля, на площадках наших <br/> партнеров IAAI и Copart. Период  поиска <br/> автомобиля в среднем занимает 2 недели
          </h1>
        </div>
      </div>
    </div>
  )}
</motion.div>
    
      <div className=" w-[100%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>
  
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  <div className="flex justify-between justify-items-end pl-0 2xl:pl-[50px]">
    <h1 className="text-[clamp(65px,5vw,80px)] text-[rgb(245,14,48)]  font-bold">02</h1>
    <h1 className="text-[clamp(20px,2vw,44px)] pt-[35px] 2xl:pr-[54%] xl:pr-[54%] lg:pr-[54%] md:pr-[48%] sm:pr-[80px] pr-[30%] font-semibold">Покупка</h1>

    <button onClick={() => factionClick(1)}>
      {faction[1] ? (
        <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">˄</div>
      ) : (
        <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">˅</div>
      )}
    </button>
  </div>

  {faction[1] && (
    <div className="bg-[#ffffff] w-[100%] 2xl:h-[370px] h-[100%] text-slate-950 mt-4">
      <div className="flex justify-between flex-wrap">
        <h1 className="text-[20px] 2xl:pl-[21%] 2xl:pr-[0px] xl:pr-[0px] lg:pr-[79px] pr-[131px] font-semibold">Выбор автомобиля</h1>
        <div className="hidden min-[470px]:flex">
          <h1 className="text-[clamp(16px,4vw,18px)] pr-[20px] font-normal">
            Персональный подход при выборе автомобиля<br/>Консультируем по всем вопросам: комплектация, цена<br/>таможенные сборы и другие расходы.
          </h1>
        </div>
        <div className="flex min-[470px]:hidden">
          <h1 className="text-[clamp(16px,4vw,18px)] pr-0 pt-4 font-normal">
            Индивидуальный подход<br/> и консультация от опытных специалистов<br/> по всем вопросам, связанным с выбором, <br/>доставкой и стоимостью автомобиля<br/> и другими расходами.
          </h1>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-[0.5rem] pt-[24px]">
        <h1 className="text-[20px] 2xl:pl-[21%] 2xl:pr-[180px] xl:pr-[179px] pr-[185px] font-semibold">ГИБДД</h1>
        <div>
          <h1 className="text-[clamp(16px,3vw,18px)] 2xl:pr-[45px] xl:pr-[45px] lg:pr-[45px] pr-0 font-normal">
            постановка автомобиля на учёт в течение 1–2 дней,<br/> включая все необходимые документы
          </h1>
        </div>
      </div>

      <div className=" flex justify-between flex-wrap gap-6 pt-[24px]">
        <h1 className="text-[20px] 2xl:pl-[21%] pr-[140px] font-semibold">Страховка</h1>
        <div className="pb-[30px]">
          <h1 className="text-[clamp(16px,3vw,18px)] pr-[58px] font-normal">
            Страховка под ключ — оформим  ОСАГО и КАСКО  <br/>на выгодных условиях с  доставкой  полиса  и<br/>  полной консультацией
          </h1>
        </div>
      </div>
    </div>
  )}
</motion.div>
    
      <div className=" w-[100%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>

   <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  <div className="flex justify-between justify-items-end pl-0 2xl:pl-[50px]">
    <h1 className="text-[clamp(65px,5vw,80px)] text-[rgb(245,14,48)]  font-bold">03</h1>
    <h1 className="text-[clamp(20px,2vw,44px)] 2xl:pt-[35px] xl:pt-[35px] lg:pt-[35px] md:pt-[35px] sm:pt-[35px] pt-4 2xl:pr-[32%] xl:pr-[32%] lg:pr-[32%] md:pr-[19%] sm:pr-[10%] 2xl:pl-[0px] xl:pl-[0px] lg:pl-[0px] md:pl-[0px] sm:pl-[20px] pl-[13px] font-semibold">Доставка в ваш город</h1>

    <button onClick={() => factionClick(2)}>
      {faction[2] ? (
        <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">˄</div>
      ) : (
        <div className="w-12 h-12 rounded-full bg-[rgb(250,0,44)] hover:text-[rgb(0,0,0)] text-white text-[21px] pt-[8px] font-bold hover:bg-[rgb(244,246,248)]">˅</div>
      )}
    </button>
  </div>

  {faction[2] && (
    <div className="bg-[#ffffff] w-[100%] 2xl:h-[370px] h-[100%] text-slate-950 mt-4">
      <div className="flex justify-between flex-wrap">
        <h1 className="text-[20px] 2xl:pl-[21%] 2xl:pr-[100px] xl:pr-[100px] lg:pr-[22px] pr-[131px] font-semibold">Карго-компания</h1>
        <div>
          <h1 className="text-[clamp(16px,4vw,18px)] pr-[27px] font-normal">
            Доставка через карго-компанию с гарантией <br/> безопасности оптимального маршрута, оформление <br/> документов, своевременная доставка в любой регион
          </h1>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-[0.5rem] pt-[24px]">
        <h1 className="text-[20px] 2xl:pl-[21%] pr-[72px] font-semibold">Эвакуатор</h1>
        <div>
          <h1 className="text-[clamp(16px,2vw,18px)] 2xl:pr-[60px] xl:pr-[60px] lg:pr-[60px] pr-0 font-normal">
            Доставка автомобиля эвакуатором до вашего <br/> города, перевозим машины в любых состояниях,<br/> включая битые и не на ходу, с полной страховкой <br/> груза
          </h1>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-6 pt-[24px] pb-[30px]">
        <h1 className="text-[20px] 2xl:pl-[21%] pr-[49px] font-semibold">Самовывоз</h1>
        <div>
          <h1 className="text-[clamp(16px,3vw,18px)] pr-[30px] font-normal">
            Возможность самостоятельного вывоза автомобиля, <br/> с наших складов или терминалов после оформления<br/> документов и прохождения таможни
          </h1>
        </div>
      </div>
    </div>
  )}
</motion.div>
    
      <div className="  w-[100%] h-[1px] bg-[rgba(0,0,0,0.3)]"></div>

  
  </div>
  
 
</div>



</section>
 
  );
}


export default Card
