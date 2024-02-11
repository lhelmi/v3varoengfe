
import FormCreate from "./form";
import { Container, Col } from "react-bootstrap";

const ProductCreate = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }
    return (
        <>
        <Container>
            <Col xs={12}>
                <FormCreate formOnSubmit = {handleSubmit} />
            </Col>
        </Container>
        </>
    );
}

export default ProductCreate;