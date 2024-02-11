import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const LoginForm = ({loginSubmit, isLoading}) => {
    return (
        <Card className='mt-3'>
            <Card.Header>Login</Card.Header>
            <Card.Body>
                <Form className='mt-3' onSubmit={loginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="" name="username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" name="password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {!isLoading ? 'Sign in' : 'Loading..'}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default LoginForm;
{/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="" />
</Form.Group> */}