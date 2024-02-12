const ProductList = ({barcode, name, price, purchase_price}) => {
    return (
        <div className="card mt-2">
            <div className="card-header">
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
        </div>
    );
}

export default ProductList