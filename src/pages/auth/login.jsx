import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <>
            <Container>
                <Col xs={12}>
                    <LoginForm/>
                </Col>
            </Container>
        </>
    )
}

export default Login;