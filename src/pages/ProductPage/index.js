import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Filters from "../../components/Filters";
import ShoesList from "../../components/ShoesList";
import { useDispatch } from "react-redux";
import filtersSlice from "../../components/Filters/filtersSlice";
import "./style.scss";
import { Toaster } from "react-hot-toast";

export default function ProductPage({ categorySelect }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };
  console.log(search);

  return (
    <div className="products-container">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            color: "#fff",
            width: "300px",
            height: "50px",
            fontSize: "1.1rem",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            style: {
              background: "rgb(56, 142, 60)",
            },
          },
        }}
      />
      <section className="search-section">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input
            className="search-input"
            placeholder="Bạn muốn tìm gì"
            value={search}
            onChange={handleSearch}
          ></input>
        </div>
      </section>
      <div className="section-flex">
        <Filters categorySelect={categorySelect} />
        <ShoesList />
      </div>
    </div>
  );
}
