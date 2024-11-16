import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1>Card Component with Children</h1>

      <Card>
        <h2>Title of Card 1</h2>
        <p>This is the content of the first card. It can include any elements.</p>
      </Card>

      <Card>
        <h2>Title of Card 2</h2>
        <p>This card contains another piece of content.</p>
      </Card>

      <Card>
        <h2>Title of Card 3</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Card>
    </div>
  );
};

export default App;
