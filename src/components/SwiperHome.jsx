
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Car from "../assets/imgs/Car_exemple.jpg"
import { useNavigate } from 'react-router-dom';
export default function SwiperHome({carInf}){
  const navigate = useNavigate()
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
    return(
      <div className='wrapper swiperHomeCont'>
        <p className='ourCarsH1'>Наші автомобілі</p>
        <button className='allCarsBtn' onClick={()=>navigate("/cars")}>Всі автомобілі</button>
        <Swiper
        // install Swiper modules
          modules={[Pagination]}
          spaceBetween={70}
          slidesPerView={3}
          pagination={pagination}

        >
          {carInf.map(val=>{
            return<SwiperSlide>
            <div className='flex flex-col text-center'>
              <img src={val.bImg} alt="" />
              <p>{val.mark}</p>
              <p>{val.model}</p>
            </div>
          </SwiperSlide>
          })}
          
          
        </Swiper>
    </div>
    )
}