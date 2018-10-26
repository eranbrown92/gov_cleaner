import React from "react";

class CheckoutForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Name: </label>
          <input type="text" />
          <p>
            <input type="submit" value="submit" />
          </p>
          <hr />
        </form>
      </div>
    );
  }
}
export default CheckoutForm;
