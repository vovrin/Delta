
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Car from "../assets/imgs/Car_exemple.jpg"
export default function SwiperHome(){
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
    return(
      <div className='wrapper swiperHomeCont'>
        <p>Наші автомобілі</p>
        <button className='allCarsBtn'>Всі автомобілі</button>
        <Swiper
        // install Swiper modules
          modules={[Pagination]}
          spaceBetween={70}
          slidesPerView={3}
          pagination={pagination}

        >
          <SwiperSlide>
            <div className='flex flex-col text-center'>
              <img src={Car} alt="" />
              <p>Car</p>
              <p>Example</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col text-center'>
              <img src={Car} alt="" />
              <p>Car</p>
              <p>Example</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col text-center'>
              <img src={Car} alt="" />
              <p>Car</p>
              <p>Example</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col text-center'>
              <img src={Car} alt="" />
              <p>Car</p>
              <p>Example</p>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
    )
}