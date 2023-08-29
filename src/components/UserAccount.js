import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';

const UserAccount = () => {

    const location = useLocation()
    const [profile, setProfile] = useState([])

    useEffect(() => {
        if(location.state !== null ){
            setProfile(location.state.profile)
        }
    })

    return(
        <h1>
            {profile.name} {profile.familyName}
        </h1>
    )
}

export default UserAccount;