import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import AlertPage from "./pages/AlertPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import DetailItemPage from "./pages/DetailItemPage";
import EventPage from "./pages/EventPage";
import ForgotPage from "./pages/ForgotPage";
import ForgotPage2 from "./pages/ForgotPage2";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PayPage from "./pages/PayPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/male" element={<ProductPage categorySelect='male' />} />
        <Route path="/female" element={<ProductPage categorySelect='female' />} />
        <Route path="/child" element={<ProductPage categorySelect='child' />} />
        <Route path="/accessory" element={<ProductPage categorySelect='accessory' />} />
        <Route path="/event" element={<EventPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/pay" element={<PayPage/>}/>
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/detail" element={<DetailItemPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login/register" element={<RegisterPage />} />
        <Route path="/login/forgotpass" element={<ForgotPage />} />
        <Route path="/login/forgotpass2" element={<ForgotPage2 />} />
        <Route path="/login/alert" element={<AlertPage title='KHÔI PHỤC MẬT KHẨU THÀNH CÔNG'/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
