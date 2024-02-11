import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'
import LoginForm from './LoginForm';
import { login } from '../../api';

import { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login as signIn } from '../../app/store/authSlice';


const Login = () => {

    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authData = useSelector((state) => state.auth);

    useEffect(() => {
        if(authData.isLogin) navigate('/');
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const param = {
            username : formJson.username,
            password : formJson.password
        }
        setIsLoading(true);
        const res = await login(param);
        setIsLoading(false);
        if(res.statusCode !== 200){
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: `${res.data.errors}`,
            });
            return;
        }
        dispatch(signIn(res.data));
        navigate('/');
    }

    return (
        <>
        <Container>
            <Col xs={12}>
                <LoginForm loginSubmit = {handleLogin} isLoading={isLoading} />
            </Col>
        </Container>
        </>
    )
}

export default Login;