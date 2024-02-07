import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react';

import SearchForm from './components/SearchForm';
import TotalForm from './components/TotalForm';
import { getProduct } from './api';

const App = () => {

  const [kembalian, setKembalian] = useState(0);
  const [total, setTotal] = useState(300000);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
    
  useEffect(() => {
    console.log(cart);
  }, [
    cart
  ]);


  const bayarHandle = (key) => {
    if(key.length >= 2){
      let number = key - total;
      setKembalian(number);
    }
  }

  const searchChangeHandle = (value) => {
    if(value.length > 5){
      setSearch(value);
    }
  }

  const isExist = (data) => {
    let Tempcart = cart.slice();
    let isExist = false;
    data.qty = 1;
    if(Tempcart.length == 0){
      Tempcart.push(data);
      return Tempcart;
    }
    
    Tempcart.map((v, k) => {
      if(v.barcode == data.barcode){
        v.qty += 1;
        isExist = true;
      }
    });
    if(!isExist) Tempcart.push(data);
    
    return Tempcart;
  }

  const searchSubmitHandle = async () => {
    let data = await getProduct(search);
    if(!data){
      alert('eweh');
      return;
    }
    
    const temp = isExist(data);
    
    setCart(temp);
  }

  const ShowCart = () => {
    return cart.map((cart, i) => {
      return (
        <button key={i}>{`${cart.barcode}-${cart.qty}`}</button>
      );
    });
  }

  return (
    <>
      <Container>
        <Col xs={12}>
          <ShowCart />
          <SearchForm
            searchChange={({target}) => searchChangeHandle(target.value)}
            searchSubmit={() => searchSubmitHandle()}
          />
          <TotalForm
            total={total}
            onBayarChange={({target}) => bayarHandle(target.value)}
            kembalianValue={kembalian}
          />
        </Col>
      
      </Container>
    </>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css';
export default App
