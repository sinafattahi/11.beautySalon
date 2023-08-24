import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {linesInfo} from '../data/linesInfo';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const LinesSwiper = (props) => {

  const navigate = useNavigate();
  const lineInfo = linesInfo;

  const numSlide = window.innerWidth >= 800 ? 5 : window.innerWidth >= 400 ? 4 : 3

    

    return (
      <div className='m-auto mt-5' style={{width:"90%"}}>
        <Swiper
          style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-navigation-size": "15px",
                }}
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={numSlide}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <div className='container lines'>
            <div className='row p-1 m-1 justify-content-center'>
              {lineInfo.map((l , i) => <SwiperSlide onClick={() => navigate(`/lines/:${l.id}`)} key={i} className='btn btn-outline-secondary d-flex justify-content-center align-items-center p-1 col-4 border border-3 rounded-3 m-1 text-center lines'>
                {l.l}
                </SwiperSlide>)}
            </div>
          </div>
      </Swiper>
      </div>
        
    )
}

export default LinesSwiper;