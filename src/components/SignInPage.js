import { useState } from "react";
//import axios from "axios";

function LogInPage () {

    const [userName, setUsername] = useState(['']);
    const [password, setPassword] = useState(['']);


    async function onClickHandler(e) {
        e.preventDefault();

        // const respose = await axios.post("link",userName,password);
        // const token = respose.data.token;
        const token = 'sina1111'
        localStorage.setItem('token',token);
        
        console.log(userName,password)
    }



    return(
        <div className="container text-center position-absolute top-50 start-50 translate-middle">
            <div className="row ">
                <div className="col mt-5 mb-5">
                    <form>
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            نام کاربری
                        </label>
                        <input onChange={e => setUsername(e.target.value)} type="userName" className="form-control" id="exampleInputUserName1" value={userName} />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            رمز عبور
                        </label>
                        <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" value={password} />
                        </div>
                        <button onClick={onClickHandler} type="submit" className="btn btn-primary">ورود</button>
                        
                    </form>
                </div>
                <div className="col">
                    <div>
                       <img className="w-50" src="./../media/img/FEDRA-G-b.png"/>
                       <br/>
                       <br/>
                       <p>
                        کیفیت را با ما تجربه کنید
                       </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogInPage;