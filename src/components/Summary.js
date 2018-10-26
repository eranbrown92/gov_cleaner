import React from "react";
import VehicleOut from "./VehicleOut";
import CheckoutForm from "./CheckoutForm";

class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [
        {
          name: "A1C Brown"
        },
        {
          name: "SrA Jones"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Summary</h1>
        <CheckoutForm />
        {this.state.details.map(user => {
          return <VehicleOut user={user} />;
        })}
      </div>
    );
  }
}
export default Summary;
