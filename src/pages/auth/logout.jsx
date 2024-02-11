import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from '../../app/store/authSlice';

const Logout = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authData = useSelector((state) => state.auth);

    useEffect(() => {
        console.log(authData.isLogin);
        if(authData.isLogin){
            dispatch(logout());
        }
        navigate('/auth/login');
    }, []);
    
    return (
        <>
        </>
    )
}

export default Logout;