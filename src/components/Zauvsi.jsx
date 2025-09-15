
import { useState } from "react";
import Modal from 'react-modal';
import { motion } from "framer-motion";
import axios from "axios";




function Zauvs() {

      const [tel ,setel] = useState('')
      const [showThanks, setShowThanks] = useState(false);
      const [show, setShow] = useState('');
      const [error, setError] = useState("");






const zauvs = async (e) => {
  e.preventDefault();
  try {
    const dan = { tel };
    const response = await axios.post(" https://fourfeef.onrender.com/applications/zauvs", dan);
    
    if (response.status === 200 ) {
      setShowThanks(true);   
      setel("");             
      setError("");          
    }
  } catch (error) {
    console.error("Ошибка при отправке заявки:", error);
    setError("Не удалось отправить заявку. Попробуйте позже.");
  }
};

  

const handleChange = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setel(value);
};







  return (

      <div className="bg-[url('/img/Image.png')] bg-cover bg-center flex pt-[127px] pb-[100px]  justify-center w-full h-[100%]">

<form onSubmit={zauvs} className="w-[100%]">
  <div className="flex justify-center 2xl:mx-[0px] xl:mx-[0px] lg:mx-[0px] md:mx-[0px] sm:mx-[0px] mx-[16px] flex-wrap-reverse gap-[30px]">

   
    <motion.div
      className="bg-[rgba(255,255,255,1)] 2xl:w-[459px] xl:w-[459px] lg:w-[459px] md:w-[459px] sm:w-[459px] w-[343px] rounded-[20px] h-[536px] 2xl:h-[482px] xl:h-[482px] lg:h-[482px] md:h-[482px] sm:h-[482px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <section id='zauvs'>
        <div className='pt-[25px] 2xl:pt-[40px] xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] 2xl:pl-[35px] xl:pl-[35px] lg:pl-[35px] md:pl-[35px] sm:pl-[35px] px-[17px]'>
          <h1 className='text-[clamp(28px,5vw,24px)] pb-[12px] font-semibold'>Только телефон, и мы в деле</h1>
          <h1 className='text-[16px] m-0 p-0 leading-tight pb-[12px]'>
            Специалист перезвонит Вам в течение <br/> 5 минут, в рабочее время для уточнения деталей
          </h1>

          <input
  type="tel"
  value={tel}
  onChange={handleChange}
  placeholder="+7(927)666-52-97"
    className={`w-[100%] 2xl:w-[395px] xl:w-[395px] lg:w-[395px] md:w-[395px] sm:w-[395px] h-[60px] box-border border text-[20px] ${ error ? "border-[rgb(255,30,30)]" : "border-black"  }  rounded-lg bg-white pl-[20px]`}
/>
{error && <p className="text-[rgb(255,30,30)]  pt-1 ">{error}</p>}
         
        </div>
      </section>

      <div className="2xl:pl-[35px] xl:pl-[35px] lg:pl-[35px] md:pl-[35px] sm:pl-[35px] px-[17px] pt-[16px]">
 <button
  className='w-[100%] 2xl:w-[395px] xl:w-[395px] lg:w-[395px] md:w-[395px] sm:w-[395px] h-[60px] font-semibold rounded-[8px] bg-[rgba(250,0,44,1)] text-[20px] text-white disabled:opacity-50'
  
   type="submit"
   onClick={zauvs}
  >
  Получить консультацию
</button>

      </div>

      <div className="flex items-center space-x-2 pt-[8px] pl-[30px]">
        <input
          type="checkbox"
          checked={show}
          onChange={(e) => setShow(e.target.checked)}
          className="w-[20px] h-[20px] accent-black"
        />
        <a href="https://megasport.ua/ua/static/politika-konfidentsiynosti/?srsltid=AfmBOopJ_6Edesh105n2jxi1o4IQ49Re1OZktJYPDkY9p6hhwasM6X-G" className="text-[rgba(0,0,0,0.5)] text-[clamp(10px,1vw,16px)] m-0 p-0 leading-tight">
          Нажимая на кнопку вы соглашаетесь с условиями <br /> Политики конфиденциальности
        </a>
      </div>

      <div className="2xl:pl-[35px] xl:pl-[35px] lg:pl-[35px] md:pl-[35px] sm:pl-[35px] pl-[17px]">
        <h1 className='text-[20px] font-semibold pt-[24px]'>Связаться с нами через мессенджер</h1>
      </div>

      <div className='2xl:pl-[35px] xl:pl-[35px] lg:pl-[35px] md:pl-[35px] sm:pl-[35px] pl-[17px] flex gap-[12px] pt-[16px]'>
       <a href="https://www.whatsapp.com/?lang=ru_RU">
         <button className='flex border border-[#FA002C] rounded-full p-2 gap-[8px]'>
          <img   loading="lazy" className='w-[20px] h-[20px]' src='/img/rfe.png' alt="Whatsapp" />
          <span>Whatsapp</span>
          
        </button>
       </a>

      <a href="https://t.me/Rocetk66">
          <button className='flex border border-[#FA002C] rounded-full p-2 gap-[8px]'>
          <img   loading="lazy" className='w-[20px] h-[20px]' src='/img/dc.png' alt="Telegram" />
          <span>Telegram</span>
        </button>
      </a>
      </div>
    </motion.div>

    
    <motion.div
      className="bg-[rgba(255,255,255,1)] 2xl:w-[800px] xl:w-[459px] lg:w-[459px] md:w-[459px] sm:w-[459px] w-[343px] rounded-[20px] h-[482px] 2xl:h-[482px] xl:h-[482px] lg:h-[482px] md:h-[482px] sm:h-[482px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className='2xl:pl-[35px] xl:pl-[35px] lg:pl-[35px] md:pl-[35px] sm:pl-[35px] pl-[17px] 2xl:pr-[140px] xl:pr-[46px] lg:pr-[46px] pr-[46px] 2xl:pt-[22px] pt-[22px]'>
        <h1 className='text-[clamp(28px,3vw,44px)] font-semibold m-0 p-0 leading-tight'>Точный расчет стоимости уже через 1 час</h1>
        <div className='flex justify-items-center gap-[15px] pt-[40px]'>
          <img  alt="разное" loading="lazy" className='w-[36px] h-[36px] mt-[10px]' src='/img/free-icon-tick-3952263 1.png' />
          <h1 className="text-[clamp(16px,1vw,20px)]">Расскажем какие автомобили вы можете купить<br /> с наибольшей выгодой.</h1>
        </div>
        <div className='flex justify-items-center gap-[15px] pt-[24px]'>
          <img  alt="разное" loading="lazy" className='w-[36px] h-[36px] mt-[10px]' src='/img/free-icon-tick-3952263 1.png' />
          <h1 className="text-[clamp(16px,1vw,20px)]">Отправим подобранные автомобили на ваш <br/> WatsApp или Telegram</h1>
        </div>
        <div className='flex justify-items-center gap-[15px] pt-[24px]'>
          <img  alt="разное" loading="lazy" className='w-[36px] h-[36px] mt-[10px]' src='/img/free-icon-tick-3952263 1.png' />
          <h1 className="text-[clamp(16px,1vw,20px)]">Сделаем точный расчет стоимости автомобиля<br/> с доставкой в ваш город “под ключ”</h1>
        </div>
      </div>
    </motion.div>

  </div>

  <Modal
    isOpen={showThanks}
    onRequestClose={() => setShowThanks(false)}
    className="bg-white rounded-2xl shadow-lg w-[400px] max-w-[90%] p-6 mx-auto my-40 relative flex flex-col items-center"
    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  >
    <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Заявка отправлена ✅</h1>
    <p className="text-gray-600 mb-6 text-center">
      Ожидайте ответ в течение 1 часа.
    </p>

    <button
      onClick={() => setShowThanks(false)}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
    >
      Ок
    </button>
  </Modal>
</form>


      
    
    </div>

  );
}


export default Zauvs
