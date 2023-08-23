import { Link } from "react-router-dom";


const navbar = (props) => {

  const searchClickHandler = (e) =>{
    e.preventDefault();
  }


    return(
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100" style={{width: "100%"}}> 
          <div style={{width: "100%"}}>
            <div className="container-fluid px-0 d-flex justify-content-between">
              <div className="d-flex ">
                <div>
                  <button className="navbar-toggler me-1 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa-xs"></span>
                  </button>
                  <a className="navbar-brand mx-0">
                    <img src='../../media/img/FEDRA-G-b.png' width="50" height="50" alt="" />
                  </a>
                </div>
                <a className=" a navbar-brand my-auto mx-0 under-356" href="/dashbord">
                  <h4 className="mb-0 d-none d-sm-block">
                    آکادمی تخصصی فدرا
                  </h4>
                  <h6 className="mb-0 d-block d-sm-none">
                    آکادمی تخصصی فدرا
                  </h6>     
                </a> 
              </div>
              <div className="my-auto d-flex flex-row">
                <div className="my-auto">
                  <button type="button" className="btn btn-secondary ms-2 py-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa fa-search fa-xs py-0" ></i></button>
                  
                  {
                    localStorage.getItem('token') === 'guest' ?
                    <>
                      <Link  className="btn my-auto ms-2 px-0 py-0" about="logIn"><h6 className="mb-0" style={{fontSize:"10px"}}>ورود</h6></Link>
                      <Link  className="btn btn-secondary ms-1 px-2 py-2" about="register"><h6 className="mb-0" style={{fontSize:"10px"}}>ثبت نام</h6></Link>
                    </>
                    : 
                    <button type="button" className="btn btn-secondary  ms-1" about="حساب کاربری"><i className="fa fa-user fa-xs" ></i></button>
                  }
                </div>
              </div>      
            </div>
          
            <div className="collapse navbar-collapse px-0" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0 px-2">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/dashbord">صفحه اصلی</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    لاین های تخصصی
                  </a>
                  <ul className="dropdown-menu dropdown-menu-left dropdown-menu-left">
                    <li><a className="dropdown-item text-center" href="#">عروس</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item text-center" href="#">رنگ و لایت</a></li>
                    <li><a className="dropdown-item text-center" href="#">کراتینه</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item text-center" href="#">کوتاهی و اصلاح ابرو</a></li>
                    <li><a className="dropdown-item text-center" href="#">بافت</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item text-center" href="#">مانیکور</a></li>
                    <li><a className="dropdown-item text-center" href="#">پدیکور و کف‌سابی</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item text-center" href="#">آرایش دائم</a></li>
                    <li><a className="dropdown-item text-center" href="#">هایفوتراپی</a></li>
                    <li><a className="dropdown-item text-center" href="#">فیشیال و پاکسازی</a></li>
                    <li><a className="dropdown-item text-center" href="#">تزریق بوتاکس</a></li>
                    <li><a className="dropdown-item text-center" href="#">لیزر موهای زائد</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    محصولات
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><a className="dropdown-item text-center" href="#">آموزش‌ها</a></li>
                    <li><a className="dropdown-item text-center" href="#">محصولات بهداشتی</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/dashbord">افتخارات مجموعه</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/dashbord">ارتباط با ما</a>
                </li>
              </ul>
            </div>
          </div>            
      </nav>
    </div>            
    )
}

export default navbar;