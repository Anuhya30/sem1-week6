import React from "react";
import BlogPost from "./BlogPost";

const App = () => {
  return (
    <div className="Content">
      <h1>Blog Posts</h1>

      {/* BlogPost Component Instances */}
      <BlogPost
        title="Understanding React Props"
        content="Props are a mechanism to pass data from one component to another in React. They allow components to be dynamic and reusable."
        author="John Doe"
      />

      <BlogPost
        title="Why React is Popular"
        content="React's component-based architecture and virtual DOM have made it one of the most popular frameworks for building user interfaces."
        author="Jane Smith"
      />

      <BlogPost
        title="Getting Started with Hooks"
        content="Hooks allow you to use state and lifecycle features in functional components, making React development more flexible."
        author="Chris Evans"
      />
    </div>
  );
};

export default App;
