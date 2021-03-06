import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import EquipmentDetail from './Pages/EquipmentDetail/EquipmentDetail';
import Footer from './Pages/Shared/Footer/Footer';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Blogs from './Pages/Blogs/Blogs';
import AddItem from './Pages/AddItem/AddItem';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';
import { ToastContainer } from 'react-toastify';
import Notfound from './Pages/Shared/Notfound/Notfound';
import MyItem from './Pages/MyItem/MyItem';



function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory/:id" element={<RequiredAuth><EquipmentDetail></EquipmentDetail></RequiredAuth>}></Route>
        <Route path="/manageInventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/addItem" element={<RequiredAuth><AddItem></AddItem></RequiredAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/myItem" element={<MyItem></MyItem>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>


      </Routes>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
