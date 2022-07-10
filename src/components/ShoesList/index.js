import Grid from "@mui/material/Grid";
import Item from "../../components/Item";
import "./list.scss";
import { useSelector } from "react-redux";
import {
  shoesListRemainingSelector,
  accessoriesListRemainingSelector,
} from "../../store/selectors";
import { useLocation } from "react-router-dom";

export default function ShoesList() {
  const location = useLocation();
  const shoesList = useSelector(shoesListRemainingSelector);
  const accessoriesList = useSelector(accessoriesListRemainingSelector);
  console.log("shoesList: ", shoesList);
  console.log("accessoriesList: ", accessoriesList);
  return (
    <section className="list-section">
      <Grid
        className="list-container"
        container
        spacing={2}
        sx={{ padding: "2rem" }}
      >
        {location.pathname !== "/accessory"
          ? shoesList.map((item) => {
              return (
                <Grid key={item.magiay} item lg={3} md={4} sm={6} xs={12}>
                  <Item
                    id={item.magiay}
                    name={item.tengiay}
                    price={item.gia}
                    img={item.urlanh}
                    category={item.loaigiayHangDanhmuc.danhmuc.tendanhmuc}
                  />
                </Grid>
              );
            })
          : accessoriesList.map((item) => {
              return (
                <Grid key={item.mapk} item lg={3} md={4} sm={6} xs={12}>
                  <Item
                    id={item.mapk}
                    name={item.tenpk}
                    price={item.gia}
                    img={item.urlanh}
                    category="Phụ kiện"
                  />
                </Grid>
              );
            })}
      </Grid>
    </section>
  );
}
