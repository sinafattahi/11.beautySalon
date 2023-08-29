import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import axios from "axios";

import { Link } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [familyName, setFamilyName] = useState();
    const [emailAdress, setEmailAdress] = useState();
    const [userName, setUsername] = useState();
    const [password, setPassword] = useState();
    const [phoneNumber, setphoneNumber] = useState();
    const [errors, setErrors] = useState([]);

    const userSchema = yup.object().shape({
        name: yup.string().required("نام خود را وارد کنید"),
        familyName: yup.string().required('نام خانوادگی خود را وارد کنید'),
        userName: yup.string().required('نام کابری خود را وارد کنید'),
        password: yup.string().min(8,'رمز باید حداقل 8 کاراکتر باشد').required('رمز مورد نظر خود را وارد کنید'),
        emailAdress: yup.string().email('فرمت ایمیل صحیح نیست'),
        phoneNumber: yup.string().required('شماره تلفن الزامیست'),
      });

    let dataObject = {
        name: name,
        familyName: familyName,
        userName: userName,
        password: password,
        emailAdress: emailAdress,
        phoneNumber: phoneNumber,
    }

    const validate = async () => {
        try{
            const result = await userSchema.validate(dataObject,{abortEarly:false});
            setErrors([]);
            return result;
        }catch(error){
            console.log(error.errors)
            setErrors(error.errors)
        }
    }


    async function userClickHandler(e) {
        e.preventDefault();

        const result = await validate();

        try{
            //const respose = await axios.post("link/", result);
            // const token = respose.data.token;
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
            //setErrors('نام کاربری توسط کاربر دیگری استفاده شده است')
        }    
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
                <div className="col my-3 mx-auto">
                    <form>
                        <img className="w-50 align-self-center d-block d-sm-none d-md-block d-lg-none mx-auto" src="./../media/img/FEDRA-G-b.png"/>
                        <div className="mb-2">
                            <label htmlFor="exampleInputName1" className="form-label">
                                نام
                            </label>
                            <input 
                                onChange={e => setName(e.target.value)} 
                                type="name" className="form-control focus-ring focus-ring-secondary" 
                                id="exampleInputName1" 
                                value={name} 
                
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleInputFamilyName1" className="form-label">
                                نام خانوادگی
                            </label>
                            <input 
                                onChange={e => setFamilyName(e.target.value)} 
                                type="familyName" className="form-control focus-ring focus-ring-secondary" 
                                id="exampleInputFamilyName1" value={familyName} 
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                نام کاربری
                            </label>
                            <input onChange={e => setUsername(e.target.value)} 
                            type="userName" dir="ltr" className="form-control focus-ring focus-ring-secondary" 
                            id="exampleInputUserName1" 
                            value={userName} 
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                رمز عبور
                            </label>
                            <input onChange={e => setPassword(e.target.value)} 
                            type="password" dir="ltr" className="form-control focus-ring focus-ring-secondary" 
                            id="exampleInputPassword1" 
                            value={password}    
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleInputRepeatedPassword1" className="form-label">
                                شماره موبایل
                            </label>
                            <input onChange={e => setphoneNumber(e.target.value)}
                            type="phoneNumber" dir="ltr" className="form-control focus-ring focus-ring-secondary"
                            id="exampleInputPhoneNumber1"
                            value={phoneNumber}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                            ایمیل
                            </label>
                            <input onChange={e => setEmailAdress(e.target.value)} 
                            type="email" dir="ltr" className="form-control focus-ring focus-ring-secondary" 
                            id="exampleInputEmail1" 
                            value={emailAdress}
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <button onClick={userClickHandler} type="submit" className="btn btn-secondary">ورود</button> 
                        </div>

                        <br />

                        <Link to='/google' className="text-decoration-none" style={{color:"#5C636A"}}>ورود با اکانت  <span style={{color:"red"}}>گوگل</span></Link>

                        <br />
                        <br />

                        <Link to='/logIn' className="text-decoration-none" style={{color:"#5C636A"}}>قبلا عضو شده اید؟ رفتن به صفحه ورود</Link>
                       
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Register;