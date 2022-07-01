import "./style.scss";
import PersonForm from "../../components/Form/PersonForm";
import AccountForm from "../../components/Form/AccountForm";
export default function PersonPage() {
  return (
    <div className="person-container">
      <section className="pay-section">
        <div className="container container--pay">
          <PersonForm />
          <AccountForm />
        </div>
      </section>
    </div>
  );
}
