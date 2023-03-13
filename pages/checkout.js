import { Col, Row } from "reactstrap";
import { Elements } from "@stripe/react-stripe-js";
import Cart from "../components/cart";
import CheckOutForm from "../components/checkout/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51MhVJDJ4qHhkggkTmpvqOiUPsnNGu9fCEOjU3rdlmOZSviE69ol0GeoBShZIrzbhSBdiP4Ax2o13Jtd76jstZtcs006JhEvDnq"
  );
  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20, fontSize: 20, textAlign: "center" }}>
          チェックアウト
        </h1>
        <Cart />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </Col>
    </Row>
  );
};

export default checkout;