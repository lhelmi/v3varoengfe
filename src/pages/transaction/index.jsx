import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchForm from './components/SearchForm';
import TotalForm from './components/TotalForm';
import Items from './components/Items';

import { getProduct } from '../../api';
import { rupiahToNumber } from '../../utils/format';

import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeItem,
  cleanCart
} from '../../app/store/cardSlice';

const Transaction = () => {
  const [kembalian, setKembalian] = useState(0);
  const [bayar, setBayar] = useState(0);
  const [search, setSearch] = useState("");
  const reduxData = useSelector((state) => state.cart);
  const total = reduxData.total;
  const dispatch = useDispatch();
  useEffect(() => {
    updateTotal()
  }, [
    reduxData
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

  const searchSubmitHandle = async (e) => {
    e.preventDefault();
    let res = await getProduct(search);
    if(res.statusCode !== 200){
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: `${res.data.errors}`,
      });
      return;
    }
    dispatch(addToCart(res.data));
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
        dispatch(cleanCart());
        Swal.fire({
          title: "Terhapus!",
          timer: 1000,
          icon: "success"
        });
        
      }
    });
  }

  const updateTotal = () => {
    setBayar((state) => state ? state : 0);
    setKembalian(bayar-total);
  }

  const minusClickHandle = (id) => {
    dispatch(decrementQuantity(id));
  }

  const plusClickHandle = (id) => {
    dispatch(incrementQuantity(id));
  }

  const deleteItemHandle = (id) => {
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
        dispatch(removeItem(id));
        Swal.fire({
          title: "Terhapus!",
          timer: 1000,
          icon: "success"
        });
        
      }
    });
  }

  const ShowCart = () => {
    return reduxData.item.map((cart, i) => {
      return (
        <Items
          key={i}
          barcode={cart.barcode}
          name={cart.name}
          qty={cart.quantity}
          price={cart.price} 
          total={cart.total}
          minusClick={() => minusClickHandle(cart.id)}
          plusClick={() => plusClickHandle(cart.id)}
          deleteItem={() => deleteItemHandle(cart.id)}
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
export default Transaction
