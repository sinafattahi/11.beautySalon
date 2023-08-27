import { useState, useEffect } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const GoogleAuth = () => {

    const [ user, setUser ] = useState([]);
    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    const googleEnter = ( data ) => {

        const token = user.access_token
        const userType = 'googleUser'
        localStorage.setItem('token',token);
        localStorage.setItem('userType',userType);
        navigate('/dashbord', {state:{profile:data}});
    }    

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        googleEnter(res.data)
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );


    return(
        <div className="container text-center position-absolute top-50 start-50 translate-middle" style={{backgroundColor:"#F8F9FA"}}>
            <div className="row ">
                <div className="d-flex col-8 d-none d-sm-none d-md-none d-lg-block ">
                    <div className="d-flex flex-column align-self-center my-auto">
                       <img className="w-50 align-self-center" src="./../media/img/FEDRA-G-b.png"/>
                       <p>
                        کیفیت را با ما تجربه کنید
                       </p>
                    </div>
                </div>
                <div className="col my-3 mx-auto">
                    <form>
                        <img className="w-50 align-self-center d-block d-sm-none d-md-block d-lg-none mx-auto" src="./../media/img/FEDRA-G-b.png"/>
                       

                        {/* <div className="d-grid gap-2">
                            <button onClick={userClickHandler} type="submit" className="btn btn-secondary">ورود</button> 
                        </div> */}

                        <br />
                        <button className="btn btn-secondary" onClick={() => login()}>ورود با گوگل 🚀 </button>

                        {/* <Link onClick={() => login()} className="text-decoration-none" style={{color:"#5C636A"}}>ورود با اکانت  <span style={{color:"red"}}>گوگل</span></Link> */}

                        <br />
                        <br />

                        <Link to='/logIn' className="text-decoration-none" style={{color:"#5C636A"}}>ورود با استفاده از نام کاربری</Link>
                       
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default GoogleAuth;