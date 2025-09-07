
import Map from './Map'

function Contact() {


  return (


    <div className=" bg-[rgb(244,246,248)] h-[100%] pb-[60px]  w-[100%]">
    <section id='contacts'>
      <div className='2xl:ml-[17%] xl:ml-[17%] lg:ml-[17%] md:ml-[17%] sm:ml-[17%] ml-[16px] '>
        <div className='pt-[100px]'>
          <h1 className=' text-[clamp(28px,5vw,44px)] font-semibold '>Наши контакты</h1>
        </div>
       
      </div>
       <div className='pt-[20px]  2xl:pt-[56px] xl:pt-[56px] lg:pt-[56px] md:pt-[56px] sm:pt-[56px]    flex 2xl:justify-center justify-start 2xl:pl-[0%] xl:pl-[17%] lg:pl-[17%] md:pl-[17%] sm:pl-[17%] pl-[16px] flex-wrap gap-[17%]'>
          <div><h1 className=' text-[clamp(16px,5vw,20px)] font-medium  text-[rgba(0,0,0,0.5)] '>Адрес:</h1>
           <h1 className=' pt-[20px] text-[clamp(18px,5vw,20px)] font-medium  '>428000, г. Чебоксары,<br/> Марпосадское шоссе, 14</h1></div>
            <div><h1 className=' text-[clamp(16px,5vw,20px)] font-medium  text-[rgba(0,0,0,0.5)] '>Время работы:</h1>
           <h1 className=' pt-[20px] text-[clamp(18px,5vw,20px)] font-medium  '>Ежедневно 10:00 до 19:00</h1></div>
            <div><h1 className=' text-[clamp(16px,5vw,20px)] font-medium  text-[rgba(0,0,0,0.5)] '>Телефон:</h1>
           <h1 className=' pt-[20px] text-[clamp(18px,5vw,20px)] font-medium  '>8 927 997 12 42<br/> 8 927 997 12 42</h1></div>
        </div>
    
           <div className='pt-[40px] 2xl:flex   2xl:pl-[17%] xl:pl-[17%] lg:pl-[17%] md:pl-[17%] sm:pl-[17%] pl-[16px] gap-[24%]'>
          <div><h1 className=' text-[clamp(16px,5vw,20px)] font-medium  text-[rgba(0,0,0,0.5)] '>E-mail:</h1>
           <h1 className=' pt-[20px] text-[clamp(18px,5vw,20px)] font-medium  '>carmark21@auto.ru</h1></div>
    
           <div><h1 className=' text-[clamp(16px,5vw,20px)] font-medium  text-[rgba(0,0,0,0.5)] '>Соц. сети:</h1>
           <div className=' pt-[20px] gap-[8px]  flex'>
    
    
          <a href='https://t.me/Rocetk66'>
            <img src='/img/eded.png'></img>
           </a>
             <a href='https://www.viber.com/ru/'>
            <img src='/img/ee.png'></img>
           </a>
             <a href='https://youtu.be/dw23LGgWHKw?si=k0LvZsOiT0jWjW_n'>
            <img src='/img/fe.png'></img>
           </a>
    
           </div>
    
          
           
           
           </div>
        </div>
           <div className=' flex justify-center   rounded-[19px]  2xl:w-[85%]  xl:w-[85%] lg:w-[85%]  md:w-[85%] sm:w-[85%]  w-[90%]   2xl:mx-[0px] xl:mx-[0px] lg:mx-[0px] md:mx-[0px] sm:mx-[0px] mx-[16px]    2xl:h-[321px]  xl:h-[321px] lg:h-[321px]  md:h-[321px] sm:h-[321px]   h-[240px] 2xl:pl-[17%] xl:pl-[17%] lg:pl-[17%] md:pl-[17%] sm:pl-[17%] pl-[0px]     pt-[42px]'>
            <Map />
           </div>
    
           <div className='2xl:flex xl:flex lg:flex md:flex sm:flex  gap-[13%] pt-[200px]  2xl:pl-[17%] xl:pl-[17%] lg:pl-[17%] md:pl-[17%] sm:pl-[17%] pl-[16px] '>
           <a href='https://megasport.ua/ua/static/politika-konfidentsiynosti/?srsltid=AfmBOopJ_6Edesh105n2jxi1o4IQ49Re1OZktJYPDkY9p6hhwasM6X-G' > <h1 className='underline decoration-[rgba(0,0,0,0.3)] text-[rgba(0,0,0,0.3)] hover:text-[rgb(0,0,0)]'>Реквизиты</h1></a>
            <a  href='https://megasport.ua/ua/static/politika-konfidentsiynosti/?srsltid=AfmBOopJ_6Edesh105n2jxi1o4IQ49Re1OZktJYPDkY9p6hhwasM6X-G'><h1 className='underline decoration-[rgba(0,0,0,0.3)] text-[rgba(0,0,0,0.3)] hover:text-[rgb(0,0,0)]'>Политика конфиденциальности</h1></a>
           </div>
    </section>
    </div>

  );
}


export default Contact