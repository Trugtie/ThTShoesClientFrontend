import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ScrollTop from "./components/ScrollTop";
import { fetchShoes } from "./components/ShoesList/shoeslistSlice";
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoes());
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/male" element={<ProductPage categorySelect="Nam" />} />
        <Route
          path="/homepage/male"
          element={<Navigate to="/male" replace />}
        />
        <Route path="/female" element={<ProductPage categorySelect="Nữ" />} />
        <Route
          path="/homepage/female"
          element={<Navigate to="/female" replace />}
        />
        <Route
          path="/child"
          element={<ProductPage categorySelect="Trẻ em" />}
        />
        <Route
          path="/homepage/child"
          element={<Navigate to="/child" replace />}
        />
        <Route
          path="/accessory"
          element={<ProductPage categorySelect="Phụ kiện" />}
        />
        <Route path="/event" element={<EventPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pay" element={<PayPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail/:id" element={<DetailItemPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login/register"
          element={<Navigate to="/register" replace />}
        />
        <Route path="/forgotpass" element={<ForgotPage />} />
        <Route
          path="/login/forgotpass"
          element={<Navigate to="/forgotpass" replace />}
        />
        <Route path="/forgotpass2" element={<ForgotPage2 />} />
        <Route
          path="/login/forgotpass2"
          element={<Navigate to="/forgotpass2" replace />}
        />
        <Route
          path="/alert"
          element={<AlertPage title="KHÔI PHỤC MẬT KHẨU THÀNH CÔNG" />}
        />
        <Route path="/login/alert" element={<Navigate to="/alert" replace />} />
      </Routes>
      <ScrollTop/>
      <Footer />
    </div>
  );
}

export default App;
