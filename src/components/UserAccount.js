import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "./NavBar";
import Modal from "./Modal";


const UserAccount = () => {

    const location = useLocation()
    const [profile, setProfile] = useState([])

    useEffect(() => {
        if(location.state !== null ){
            setProfile(location.state.profile)
        }
    })

    return(
        <>
        <Navbar profile={profile} />
        <Modal data={location.state.modalData}/>
        <br/>
        <br/>
        <br/> <br/>
        <br className="d-none d-lg-block d-xl-block"/>


        <div >
            <div>
            <ul>
                <li>
                    <span>
                        first
                    </span>
                </li>
                <li>
                    <span>
                        second
                    </span>
                </li>
                <li>
                    <span>
                        third
                    </span>
                </li>
            </ul>

            </div>

            
            <div>

            </div>
        </div>
            
        </>
    )
}

export default UserAccount;