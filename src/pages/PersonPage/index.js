import "./style.scss";
import PersonForm from "../../components/Form/PersonForm";
import AccountForm from "../../components/Form/AccountForm";
import { Toaster } from "react-hot-toast";
export default function PersonPage() {
  return (
    <div className="person-container">
      <section className="pay-section">
        <div className="container container--pay">
          <PersonForm />
          <AccountForm />
        </div>
      </section>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            color: "#fff",
            width: "250px",
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
          error: {
            duration: 3000,
            style: {
              background: "rgb(211, 47, 47)",
            },
          },
        }}
      />
    </div>
  );
}
