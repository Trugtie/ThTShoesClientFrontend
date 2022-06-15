import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MalePage from "./pages/MalePage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPage from "./pages/ForgotPage";
import ForgotPage2 from "./pages/ForgotPage2";
import AlertPage from "./pages/AlertPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/male" element={<MalePage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
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
