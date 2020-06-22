import React from "react";

class SearchBare extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <input type="text" />
        <p>
          <input type="checkbox" />
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBare;
