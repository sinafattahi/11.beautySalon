import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "./NavBar";
import Modal from "./Modal";
import Footer from "./Footer";


const UserAccount = () => {

    const location = useLocation()
    const [profile, setProfile] = useState([])
    const [showId, setShowId] = useState('counter')
    const [file, setFile] = useState();

    useEffect(() => {
        if(location.state !== null ){
            setProfile(location.state.profile)
        }
    })


    const counterHandler = (e) => {
        e.preventDefault()
        setShowId('counter')
    }

    const myProfileHandler = (e) => {
        e.preventDefault()
        setShowId('myProfile')
    }
    const myProductsHandler = (e) => {
        e.preventDefault()
        setShowId('myPrducts')
    }
    const uploadHandler = (e) => {
        e.preventDefault()
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <>
            <Navbar profile={profile} />
            <Modal data={location.state.modalData}/>
            <br/>
            <br/>
            <br/>  
            <br/>
            <br className="d-none d-lg-block d-xl-block"/>

            <div className='webModePad'>
                <div className='row'>
                    <div className='col-2 p-2 '>

                        <div className='rounded d-flex flex-column align-items-center justify-content-center text-center' style={{backgroundColor:"#F8F9FA"}}>
                            <img className='rounded-circle mx-4 my-1' src={profile.picture} style={{width:"90px", height:"90px"}}/>
                            <h6> {profile.name}{" "}{profile.familyName}</h6>
                        </div>

                        <br/>

                        <div className='rounded d-flex flex-column align-items-center' style={{backgroundColor:"#F8F9FA"}}>
                            <button onClick={counterHandler} className='btn btn-light mb-2'>پیشخوان</button>
                            <button onClick={myProfileHandler} className='btn btn-light mb-2'>پروفایل من</button>
                            <button onClick={myProductsHandler} className='btn btn-light mb-2'>محصولات من</button>
                        </div>

                    </div>

                    <div 
                        id='#counter'
                        className='col-10 px-5'
                        style={
                            showId === "counter" ? {display:  'block'} : {display: 'none'}
                            }
                    >
                    <h6>پیش خوان</h6>

                        {/* devider */}
                        <h6 className='d-flex justify-content-center mt-5'>آخرین سفارش‌ها</h6>
                            <div className="wrapper">
                            <div className="divider div-transparent div-arrow-down"></div>
                        </div>


                        {/* devider */}
                        <h6 className='d-flex justify-content-center mt-5'>محبوب ترین دوره‌ها</h6>
                            <div className="wrapper">
                            <div className="divider div-transparent div-arrow-down"></div>
                        </div>
                        
                    </div>

                    <div 
                        id='#myProfile'
                        className='col-10 px-5'
                        style={
                            showId === "myProfile" ? {display:  'block'} : {display: 'none'}
                            }
                    >
                        <h6>پروفایل من</h6>
                        <div>
                            <div className='rounded d-flex flex-column align-items-center justify-content-center text-center'>
                                <img className='rounded-circle mx-4 my-1' src={profile.picture} style={{width:"90px", height:"90px", filter: "blur(1px)"}}/>
                                <i data-bs-toggle="dropdown" aria-expanded="false" style={{position: 'absolute'}} className="fa fa-solid fa-camera"></i>
                                
                                <ul className="dropdown-menu">     
                                    <li><label htmlFor="files" className="btn dropdown-item text-center">تغییر پروفایل</label></li> 
                                    <li><label htmlFor="files" className="btn dropdown-item text-center">حذف پروفایل</label></li>          
                                </ul>
                                <input onChange={uploadHandler} id="files" style={{visibility: "hidden"}} type="file"/>
                            </div>
                            
                            {/* <input type="file" onChange={uploadHandler} /> */}
                            <img src={file} />
                            
                        </div>

                        {/* <div>
                            <input value={"name"}/>
                            <label>name</label>     
                        </div> */}
                    

                    </div>

                    <div 
                        id='#myPrducts'
                        className='col-10 px-5'
                        style={
                            showId === "myPrducts" ? {display:  'block'} : {display: 'none'}
                            }
                    >
                    <h6>محصولات من</h6>

                        
                    </div>
                </div>
                

            </div>        
            <Footer/>
        </>
    )
}

export default UserAccount;