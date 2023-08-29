import { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import * as yup from 'yup'
import axios from "axios";


function LogInPage (props) {

    const navigate = useNavigate();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]);

    const userSchema = yup.object().shape({
        userName: yup.string().required('نام کابری خود را وارد کنید'),
        password: yup.string().required('رمز مورد نظر خود را وارد کنید')
      });

    let dataObject = {
        userName: userName,
        password: password,
    }

    const validate = async () => {
        try{
            const result = await userSchema.validate(dataObject,{abortEarly:false});
            setErrors([]);
            return result;
        }catch(error){
            setErrors(error.errors)
        }
    }

    async function userClickHandler(e) {
        e.preventDefault();
        const result = await validate();

        try{
            //const respose = await axios.post("link/", result);
            // const token = response.data.token;
            // const profile = response.data.profile;
            const profile = {
                name: 'سینا',
                familyName: 'فتاحی اردکانی',
                email: 's.fatahi79@gmail.com',
                phone: '09103340482'
            }
            const token = 'sina1111'
            const userType = 'siteUser'
            localStorage.setItem('token',token);
            localStorage.setItem('userType',userType);
            navigate('/dashbord',{state:{profile:profile}});

        }catch(error){
            //setErrors('نام کاربری یا رمز ورود اشتباه است')
        }    
    }

    const guestClickHandler = (e) => {
        e.preventDefault();

        const token = ''
        const userType = 'guestUser'
        localStorage.setItem('token',token);
        localStorage.setItem('userType',userType);
        navigate('/dashbord',{state:""});
    }

    return(
        <div className="container text-center position-absolute top-50 start-50 translate-middle" style={{backgroundColor:"#F8F9FA"}}>
            <div className="row ">
                <div className="d-flex col-8 d-none d-sm-none d-md-none d-lg-block ">
                    <div className="d-flex flex-column align-self-center my-auto">
                       <img className="w-50 align-self-center" src="./../media/img/FEDRA-G-b.png"/>
                       <p>
                        کیفیت را با ما تجربه کنید
                       </p>
                       {
                        errors.length !== 0 && (
                            <div className="alert alert-danger">
                                <ul>
                                   { errors.map((e,i) => <li key={i}>{e}</li>) }
                                </ul>
                            </div>
                        )
                       }
                    </div>
                </div>
                <div className="col my-auto mx-auto">
                    <form>
                        <img className="w-50 align-self-center d-block d-sm-block d-md-block d-lg-none mx-auto" src="./../media/img/FEDRA-G-b.png"/>
                        <div>
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                نام کاربری
                            </label>
                            <input 
                                onChange={e => setUsername(e.target.value)} 
                                type="userName" dir="ltr" className="form-control focus-ring focus-ring-secondary" 
                                id="exampleInputUserName1" 
                                value={userName} 
                            />
                        </div>
                        <div>
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                رمز عبور
                            </label>
                            <input 
                                onChange={e => setPassword(e.target.value)} 
                                type="password" dir="ltr" className="form-control focus-ring focus-ring-secondary" 
                                id="exampleInputPassword1" value={password} 
                            />
                        </div>

                        <br />

                        <div className="d-grid gap-2">
                            <button onClick={userClickHandler} type="submit" className="btn btn-secondary">ورود</button> 
                        </div>

                        <br />

                        <div className="d-flex justify-content-between">
                            <Link to='/forgotten' className="text-decoration-none" replace={true} style={{fontSize:"small", color:"#5C636A"}} >رمز خود را فراموش کرده اید؟</Link>
                            <Link onClick={guestClickHandler} className="text-decoration-none" replace={true} style={{fontSize:"small", color:"#5C636A"}} >ورود به عنوان مهمان</Link>
                        </div>

                        <br />

                        <Link to='/google' className="text-decoration-none" style={{color:"#5C636A"}}>ورود با اکانت  <span style={{color:"red"}}>گوگل</span></Link>

 
                        <br />
                        <br />

                        <Link to='/register' className="text-decoration-none" style={{color:"#5C636A"}}> عضو نیستید؟ ثبت نام</Link>
                       
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default LogInPage;