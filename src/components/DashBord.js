import axios from 'axios';
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import Navbar from "./NavBar";
import Footer from "./Footer";
import Modal from "./Modal";
import Carousel from "./Carousel";

import LinesSwiper from './LinesSwiper';
import { mobileModeData, pcModeData } from "../data/staticPictures";



const DashBord = () => {

  const [data, setData] = useState([])
  const [profile, setProfile] = useState([])

  const location = useLocation()

  
  
  useEffect(() => {
    
    if(location.state !== null ){
      setProfile(location.state.profile)
    }

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(
      (result) => {

        setData({data: result.data})

    }).catch((error)=>{

      console.log(error)

    })     
  },[location.state])

    const introP1 = <p>
                به وبسايت آكادمي تخصصي فدرا، یکی از بهترین سالن های زیبایی استان یزد و بهترین سالن زیبایی اردکان خوش آمديد.
                <br />
                اگر به دنبال يك مركز خدمات تخصصي آرايش و زيبايی هستيد، می‌توانيد از يكي از معتبر ترين سالن‌های زيبايی با تجربه‌اي ٤٠ ساله بهره ببريد.
                </p>

    const introP2 = <p>
              مديريت سالن،خانم بهجتی متخصص رنگ،لايت و كراتين‌های تضمينی كه هر ساله با شركت در دوره‌های مختلف به دانش خود می‌افزايند، تيمي مجرب و كاربلد را گرد هم آورده‌اند تا در خدمت شما مشتريان عزيز باشند.
              <br />
              ایشان طی چند دوره به عنوان مدرس در كلاس‌های بازآموزی مديران و مربيان يزد، به اشتراک داشته‌هايشان پرداخته و در تقويت مهارت آن‌ها نقش بسزايی ايفا كرده‌اند.
              <br />
              <br />
              در ادامه می‌توانید با انتخاب هر یک از لاین‌های تخصصی سالن زیبایی فدرا، آن‌ لاین را مشاهده کرده و نمونه‌های موجود را بررسی کنید.
              </p>

    return(
      <div>
        <Navbar data={data} profile={profile} />
        <Modal data={data}/>
        <br/>
        <br/>
        
        <br className="d-none d-lg-block d-xl-block"/>

        <Carousel 
          mode= 'mobile'
          id= 'carouselExampleAutoplaying1'
          classNameOut = 'd-block d-sm-none mhstyle'
          classNameIn = 'carousel-item mhstyle'
          data = {mobileModeData}
        />
        <Carousel 
          mode= 'mobile'
          id= 'carouselExampleAutoplaying2'
          classNameOut = 'd-none d-md-block d-lg-block d-xl-none thstyle'
          classNameIn = 'carousel-item thstyle'
          data = {pcModeData}
        />
        <Carousel 
          mode= 'pc'
          id= 'carouselExampleAutoplaying3'
          classNameOut = 'd-none d-xl-block d-xxl-block phstyle'
          classNameIn = 'carousel-item  phstyle'
          data = {pcModeData}
        />
        
        {/* devider */}
        <h6 className='d-flex justify-content-center mt-5'>درباره آکادمی تخصصی فدرا</h6>
        <div className="wrapper">
          <div className="divider div-transparent div-arrow-down"></div>
        </div>

        {/* mobile mode */}
        <div className="container row mx-auto d-none d-xl-inline-flex d-xxl-inline-flex">
            <div className="col-7 ml-auto  align-items-center mt-4 mt-md-0">
              {introP1}
              {introP2}
            </div>
          <video loop={true} autoPlay="autoplay" controls="controls" id="vid" muted className="col-5" height={"auto"} width={"100%"}>
            <source src="../../media/videos/fedraIntroductionVideo.mp4" type="video/mp4" />
          </video>
          {/* for instant playback */}
          <script>   
            document.getElementById('vid').play();
          </script>
        </div>

        {/* pc mode */}
        <div className="container px-auto mx-auto d-xl-none d-xxl-none">
          <div className=" d-flex align-items-center mt-4 mt-md-0">
            {introP1}
          </div>
          <video loop={true} autoPlay="autoplay" controls="controls" id="vid" muted height={"auto"} width={"100%"}>
            <source src="../../media/videos/fedraIntroductionVideo.mp4" type="video/mp4" />
          </video>
          {/* for instant playback */}
          <script>
            document.getElementById('vid').play();
          </script>
          <div className=" d-flex align-items-center mt-4 mt-md-0">
            {introP2}
          </div>      
        </div>

        {/* salon lines */}
        <LinesSwiper />

        {/* devider */}
        <h6 className='d-flex justify-content-center mt-5'>پر طرفدار ترین‌ها</h6>
        <div className="wrapper">
          <div className="divider div-transparent div-arrow-down"></div>
        </div>
        



        <Footer />
      </div>     
         
    )
}

export default DashBord;



