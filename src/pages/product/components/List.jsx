import { Card } from "react-bootstrap";

const ProductList = ({barcode, name, price, purchase_price, number, showModal}) => {
    
    return (
        <>
        <Card onClick={showModal} className="mt-2">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {number}
            </span>
            <div className="card-header">
                <div>
                    <span className="badge rounded-pill bg-primary"></span>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="card-title">{barcode}</h5>
                    </div>
                    <div className="col">
                        <h6 className="card-subtitle mb-2 text-muted">Harga : {price}</h6>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                    <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
                    </div>
                    <div className="col">
                        <h6 className="card-subtitle mb-2 text-muted">Harga Beli : {purchase_price}</h6>
                    </div>
                </div>
            </div>
        </Card>

        
        </>
    );
}

export default ProductList