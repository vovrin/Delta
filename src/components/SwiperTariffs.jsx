import { Navigation, Keyboard, Controller, EffectFade, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'
import VW_TiguanImgB from "../assets/imgs/VW_TiguanB.png";
import Ford_FiestaImgB from "../assets/imgs/Ford_FiestaB.png";
import TariffTableGen from './TariffTableGen';
import EconomCarImgB from "../assets/imgs/economCarB.png";
export default function SwipperTariffs(){
  
    const [controlledSwiper, setControlledSwiper] = useState(null)
    return(
        <div className='wrapper'>
            <div className='swiperTarrifsCont'>
                <Swiper className='swiper1'
                speed={1000}
                allowTouchMove = {false}
                navigation={true}
                slidesPerView={1}
                loop = {true}
                keyboard={true}
                modules={[Navigation, Keyboard, Controller]}
                controller={{
                    control:controlledSwiper
                }}
                
                >
                    <SwiperSlide>
                        <div className='carContTar'>
                            <p className='carDecsrpText'>Економ</p>
                            <img src={EconomCarImgB} className='economCarImgB' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='carContTar'>
                            <p className='carDecsrpText'>Стандарт</p>
                            <img src={Ford_FiestaImgB} className='economCarImgB' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='carContTar'>
                            <p className='carDecsrpText'>Комфорт</p>
                            <img src={VW_TiguanImgB} className='economCarImgB' alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper className='swiper2'
                speed={500}
                loop = {true}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                allowTouchMove = {false}
                modules={[Controller, EffectFade, EffectCube]}
                
                onSwiper={setControlledSwiper}
                
                
               
                >
                    <SwiperSlide>
                            <TariffTableGen infCont = {{
                            min:{
                                diap:"2.39 - 3.10",
                                prob:"0",
                                wait:"1",
                                bron:"0",
                                ponad:"0"
                            },
                            hours:{
                                diap:"196 - 230",
                                prob:"0",
                                wait:"4",
                                bron:"0",
                                ponad:"10 - 15"
                            },
                            days:{
                                diap:"1200 - 1900",
                                prob:"0",
                                wait:"10",
                                bron:"0",
                                ponad:"0"
                            }
                            


                        }
                        }></TariffTableGen>
                    </SwiperSlide>
                    <SwiperSlide>
                    <TariffTableGen infCont = {{
                            min:{
                                diap:"3.11 - 3.94",
                                prob:"0",
                                wait:"1",
                                bron:"0",
                                ponad:"0"
                            },
                            hours:{
                                diap:"231 - 453",
                                prob:"10",
                                wait:"4",
                                bron:"0",
                                ponad:"10-15"
                            },
                            days:{
                                diap:"1900-2500",
                                prob:"0",
                                wait:"10",
                                bron:"0",
                                ponad:"0"
                            }
                            


                        }
                        }></TariffTableGen>

                    </SwiperSlide>
                    <SwiperSlide>
                            <TariffTableGen infCont = {{
                            min:{
                                diap:"3.95 - 6.00",
                                prob:"0",
                                wait:"1",
                                bron:"0",
                                ponad:"0"
                            },
                            hours:{
                                diap:"454 - 605",
                                prob:"10",
                                wait:"4",
                                bron:"0",
                                ponad:"10 - 15"
                            },
                            days:{
                                diap:"2500 - 3200",
                                prob:"0",
                                wait:"10",
                                bron:"0",
                                ponad:"0"
                            }
                            


                        }
                        }></TariffTableGen>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}