import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';


import SearchForm from './components/SearchForm';
import TotalForm from './components/TotalForm';
import Items from './components/Items';

import { getProduct } from './api';
import { rupiahToNumber } from './utils/format';

const App = () => {

  const [kembalian, setKembalian] = useState(0);
  const [total, setTotal] = useState(0);
  const [bayar, setBayar] = useState(0);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
    
  useEffect(() => {
    updateTotal(cart);
  }, [
    cart
  ]);


  const bayarHandle = (key) => {
    
    key = key ? key : 0;
    let number = rupiahToNumber(key) - total;
    setBayar(rupiahToNumber(key));
    setKembalian(number);
  }

  const searchChangeHandle = (value) => {
    setSearch(value);
  }

  const isExist = (data) => {
    let Tempcart = cart.slice();
    let isExist = false;
    data.qty = 1;
    data.total = data.purchase_price * data.qty;
    if(Tempcart.length == 0){
      Tempcart.push(data);
      return Tempcart;
    }
    
    Tempcart.map((v, k) => {
      if(v.barcode == data.barcode){
        v.qty += 1;
        v.total = v.purchase_price * v.qty;
        isExist = true;
      }
    });
    if(!isExist) Tempcart.push(data);
    
    return Tempcart;
  }

  const searchSubmitHandle = async (e) => {
    e.preventDefault();
    let data = await getProduct(search);
    if(data.statusCode !== 200){
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: `${data.data.errors}`,
      });
      return;
    }
    
    const temp = isExist(data.data);
    setCart(temp);
  }

  const cleanHandle = () => {
    Swal.fire({
      title: "Apakah Anda Yakin?",
      text : 'Ingin Menghapus Semua Item!?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Tidak"
    }).then((result) => {
      if (result.isConfirmed) {
        let tempCart = cart.slice();
        tempCart = [];
        setCart(tempCart);
        Swal.fire({
          title: "Terhapus!",
          timer: 1000,
          icon: "success"
        });
        
      }
    });
  }

  const updateTotal = (arr) => {
    const totalPrice = arr.reduce((accumulator ,item) => {
      return accumulator += item.total;
    }, 0)
    setTotal(totalPrice);
    setBayar((state) => state ? state : 0);
    setKembalian(bayar-totalPrice);
  }

  const minusClickHandle = (key) => {
    let tempCart = cart.slice();
    let qty = tempCart[key].qty;
    if(qty > 1) tempCart[key].qty -= 1;
    tempCart[key].total = tempCart[key].qty * tempCart[key].purchase_price;
    
    setCart(tempCart);
  }

  const plusClickHandle = (key) => {
    let tempCart = cart.slice();
    tempCart[key].qty += 1;
    tempCart[key].total = tempCart[key].qty * tempCart[key].purchase_price;
    
    setCart(tempCart);
  }

  const deleteItemHandle = (key) => {
    Swal.fire({
      title: "Apakah Anda Yakin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Tidak"
    }).then((result) => {
      if (result.isConfirmed) {
        let tempCart = cart.slice();
        const index = tempCart[key];
        if (index) {
          tempCart.splice(index, 1);
          setCart(tempCart);
          Swal.fire({
            title: "Terhapus!",
            timer: 1000,
            icon: "success"
          });
        }
      }
    });
  }

  const ShowCart = () => {
    return cart.map((cart, i) => {
      return (
        <Items
          key={i}
          barcode={cart.barcode}
          name={cart.name}
          qty={cart.qty}
          purchase_price={cart.purchase_price} 
          total={cart.total}
          minusClick={() => minusClickHandle(i)}
          plusClick={() => plusClickHandle(i)}
          deleteItem={() => deleteItemHandle(i)}
        />
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
            searchSubmit={searchSubmitHandle}
          />
          <TotalForm
            total={total}
            onBayarChange={({target}) => bayarHandle(target.value)}
            kembalianValue={kembalian}
            bayarValue={bayar}
            onCleanClick={() => cleanHandle()}
          />
        </Col>
      
      </Container>
    </>
  )
}

export default App
