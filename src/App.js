import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import BlurLoading from "./components/BlurLoading";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpiner";
import Nav from "./components/Nav";
import ScrollTop from "./components/ScrollTop";
import {
  fetchAccessories,
  fetchAccessoriesTypes,
} from "./components/ShoesList/accessoriesSlice";
import {
  fetchAllShoesTypes,
  fetchShoes,
  fetchShoesHomepage,
} from "./components/ShoesList/shoeslistSlice";
import AboutPage from "./pages/AboutPage";
import AlertPage from "./pages/AlertPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import DetailEventPage from "./pages/DetailEventPage";
import DetailHistoryPage from "./pages/DetailHistoryPage";
import DetailItemPage from "./pages/DetailItemPage";
import EventPage from "./pages/EventPage";
import { fetchEvent } from "./pages/EventPage/eventSlice";
import ForgotPage from "./pages/ForgotPage";
import ForgotPage2 from "./pages/ForgotPage2";
import HistoryOrderPage from "./pages/HistoryOrderPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PayPage from "./pages/PayPage";
import PersonPage from "./pages/PersonPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import ResearchOrderPage from "./pages/ResearchOrderPage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchShoes());
    dispatch(fetchAllShoesTypes());
    dispatch(fetchAccessories());
    dispatch(fetchAccessoriesTypes());
    dispatch(fetchEvent());
    dispatch(fetchShoesHomepage())
      .unwrap()
      .then((originalPromiseResult) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <BlurLoading />
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route
              path="/male"
              element={<ProductPage categorySelect="Nam" />}
            />
            <Route
              path="/homepage/male"
              element={<Navigate to="/male" replace />}
            />
            <Route
              path="/female"
              element={<ProductPage categorySelect="Nữ" />}
            />
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
            <Route path="/history" element={<HistoryOrderPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/researchorder" element={<ResearchOrderPage />} />
            <Route path="/personInfo" element={<PersonPage />} />
            <Route path=":pre/detail/:id" element={<DetailItemPage />} />
            <Route path=":pre/detailEvent/:id" element={<DetailEventPage />} />
            <Route path="/detailHistory/:id" element={<DetailHistoryPage />} />
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
            <Route path="/alert/:mode" element={<AlertPage />} />
            <Route path="/alert/:mode/:id" element={<AlertPage />} />
          </Routes>
          <ScrollTop />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
