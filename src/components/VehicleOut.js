import React from "react";

class VehicleOut extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p>{user.name} checked out a Gov</p>
      </div>
    );
  }
}
export default VehicleOut;
