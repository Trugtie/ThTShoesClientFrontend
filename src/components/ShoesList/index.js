import Grid from "@mui/material/Grid";
import Item from "../../components/Item";
import "./list.scss";
import { useSelector } from "react-redux";
import { shoesListRemainingSelector } from "../../store/selectors";

export default function ShoesList() {
  const shoesList = useSelector(shoesListRemainingSelector);
  console.log("shoesList: ", shoesList);
  return (
    <section className="list-section">
      <Grid
        className="list-container"
        container
        spacing={2}
        sx={{ padding: "2rem" }}
      >
        {shoesList.map((shoes) => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item key={shoes.magiay} id={shoes.magiay} name={shoes.tengiay} price={shoes.gia} img={shoes.urlanh} />
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
}
