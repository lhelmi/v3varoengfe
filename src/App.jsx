import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transaction from "./pages/transaction";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/login";
import Logout from "./pages/auth/logout";

const App = () => {
  return (
    <>
      
        <Router>
          <Routes>
            <Route path='/' element={<Transaction/>}></Route>
            <Route path='/auth/login' element={<Login/>}></Route>
            <Route path='/auth/logout' element={<Logout/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </Router>
      
    </>
  )
}

export default App
