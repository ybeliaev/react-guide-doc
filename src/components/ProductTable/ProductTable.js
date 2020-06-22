import React from "react";

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
      </table>
    );
  }
}

export default ProductTable;
