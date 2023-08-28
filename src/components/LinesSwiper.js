import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import {linesInfo} from '../data/linesInfo';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const LinesSwiper = (props) => {

  const navigate = useNavigate();
  const lineInfo = linesInfo;

  const numSlide = window.innerWidth >= 800 ? 5 : window.innerWidth >= 400 ? 4 : 3

    return (
       <div className='m-auto mt-3' style={{width:"90%"} }>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          style={{
            "--swiper-pagination-color": "#5C636A",
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper lines mt-3"
        >
          {lineInfo.map((l , i) => <SwiperSlide 
          onClick={() => navigate(`/lines/:${l.id}`)} 
          key={i}              
          className='btn btn-light d-flex justify-content-center align-items-center p-1 col-4 border border-3 rounded-3 m-1 text-center'
          >
            {l.l}
          </SwiperSlide>)}
        </Swiper>
       </div>  
    )
}

export default LinesSwiper;